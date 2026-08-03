#!/usr/bin/env node
//
// scripts/setup-worktree.mjs
//
// Bootstraps a freshly-created git worktree so it inherits the local,
// gitignored configuration from the *primary* worktree (the one holding the
// shared .git directory). New worktrees start without these files because git
// never tracked them, which breaks `yarn dev`, the opencode CLI, etc.
//
// What it does:
//   * Links local config back to the primary worktree so every worktree shares
//     — and stays in sync with — a single source of truth. Edit once, every
//     worktree sees it. Paths may be whole files/dirs (.env*.local) or
//     individual ignored children of a partially-tracked dir.
//   * Pre-seeds the root node_modules from the primary worktree using a
//     copy-on-write clone where the OS supports it (macOS APFS clonefile via
//     `cp -c`, Linux reflink via `cp --reflink=auto`), so the `yarn install`
//     that follows only reconciles this branch's delta instead of fetching
//     everything from scratch.
//
// Cross-platform notes:
//   * Linux/macOS use real symlinks. Windows uses directory *junctions* (no
//     admin needed); file symlinks need Developer Mode/admin on Windows, so we
//     fall back to copying the file there. A copied file is then treated as a
//     real file (left untouched on re-runs) — delete it to re-pull from primary.
//   * Copy-on-write has no Windows equivalent for normal volumes, so on Windows
//     node_modules is left for `yarn install` to build normally.
//
// Meant to run from Orca's worktree setup hook, *before* `yarn install`:
//
//   node scripts/setup-worktree.mjs && yarn install
//
// Safe to run repeatedly: it is idempotent, never clobbers a real (non-symlink)
// file already present in the worktree, and is a quiet no-op when run from the
// primary worktree or outside a git checkout (e.g. CI / Vercel).

import fs from 'node:fs';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';

// Gitignored config to link from the primary worktree (`*` globs allowed).
// Entries may be top-level paths or nested children of a partially-tracked dir;
// the relative path is preserved in the destination worktree.
const CONFIG_PATHS = [
  '.env*.local',
];

const log = (msg) => process.stdout.write(`  setup-worktree: ${msg}\n`);

const git = (args) => {
  try {
    return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return null;
  }
};

// Expand one CONFIG_PATHS entry against the primary worktree. Handles a single
// `*` segment (e.g. .env*.local) without depending on shell globbing.
const expand = (pattern) => {
  if (!pattern.includes('*')) {
    return fs.existsSync(path.join(primaryRoot, pattern)) ? [pattern] : [];
  }
  const slash = pattern.lastIndexOf('/');
  const dir = slash === -1 ? '.' : pattern.slice(0, slash);
  const base = pattern.slice(slash + 1);
  const re = new RegExp(
    '^' + base.replace(/[.+^${}()|[\]\\]/g, '\\$&').replace(/\*/g, '[^/]*') + '$',
  );
  let names;
  try {
    names = fs.readdirSync(path.join(primaryRoot, dir));
  } catch {
    return [];
  }
  return names.filter((n) => re.test(n)).map((n) => (dir === '.' ? n : `${dir}/${n}`));
};

// Remove a symlink/junction *without* touching its target's contents.
// (fs.rmSync with `recursive` would follow a dir link and delete the source.)
const removeLink = (p) => {
  try {
    fs.unlinkSync(p); // file & dir symlinks on POSIX, file symlinks on Windows
  } catch {
    try {
      fs.rmdirSync(p); // Windows directory junctions: drops the reparse point only
    } catch {
      // give up — caller will surface a link error if recreation fails
    }
  }
};

// Link a single path, picking the portable mechanism for the platform.
// Returns the verb used so the caller can report what happened.
const linkOne = (target, dest) => {
  const targetIsDir = fs.statSync(target).isDirectory();
  if (process.platform === 'win32') {
    try {
      fs.symlinkSync(target, dest, targetIsDir ? 'junction' : 'file');
      return 'linked';
    } catch (err) {
      if (!targetIsDir && (err.code === 'EPERM' || err.code === 'EACCES' || err.code === 'EISDIR')) {
        // Windows file symlinks require Developer Mode/admin, and exFAT
        // volumes cannot create reparse points at all — copy instead.
        fs.copyFileSync(target, dest);
        return 'copied (no symlink privilege)';
      }
      if (targetIsDir && (err.code === 'EPERM' || err.code === 'EACCES' || err.code === 'EISDIR')) {
        // Directory junctions need NTFS — fall back to recursive copy.
        fs.cpSync(target, dest, { recursive: true });
        return 'copied (no symlink privilege)';
      }
      throw err;
    }
  }
  fs.symlinkSync(target, dest);
  return 'linked';
};

const shareConfig = () => {
  for (const pattern of CONFIG_PATHS) {
    for (const rel of expand(pattern)) {
      const src = path.join(primaryRoot, rel);
      const dest = path.join(worktreeRoot, rel);

      let st = null;
      try {
        st = fs.lstatSync(dest);
      } catch {
        // dest does not exist
      }
      if (st) {
        if (st.isSymbolicLink()) {
          try {
            if (fs.realpathSync(dest) === fs.realpathSync(src)) continue; // already linked correctly
          } catch {
            // broken link — fall through to recreate it
          }
          removeLink(dest); // wrong/broken target → replace
        } else {
          log(`skip ${rel} (a real file/dir already exists in this worktree)`);
          continue;
        }
      }

      fs.mkdirSync(path.dirname(dest), { recursive: true });
      try {
        log(`${linkOne(src, dest)} ${rel}`);
      } catch (err) {
        log(`could not link ${rel}: ${err.code || err.message}`);
      }
    }
  }
};

// Pre-seed node_modules with a copy-on-write clone where the OS supports it.
const seedNodeModules = () => {
  const src = path.join(primaryRoot, 'node_modules');
  const dest = path.join(worktreeRoot, 'node_modules');
  if (!fs.existsSync(src)) {
    log('no source node_modules — skipping pre-seed');
    return;
  }
  if (fs.existsSync(dest)) {
    if (fs.existsSync(path.join(dest, '.yarn-integrity'))) {
      log('node_modules already present — skipping pre-seed');
      return;
    }
    log('node_modules present but incomplete — purging for re-seed');
    fs.rmSync(dest, { recursive: true, force: true });
  }

  let cow = null;
  if (process.platform === 'darwin') cow = ['cp', ['-cR', src, dest]]; // APFS clonefile
  else if (process.platform === 'linux') cow = ['cp', ['-R', '--reflink=auto', src, dest]];
  else if (process.platform === 'win32') cow = ['robocopy', [src, dest, '/E', '/NJH', '/NJS', '/NDL', '/NP', '/R:0']];

  if (cow) {
    const result = spawnSync(cow[0], cow[1], { stdio: 'ignore' });
    const ok = result.status !== null && result.status < 8; // robocopy: 0-7 = success
    if (ok) {
      log(`pre-seeded node_modules (${cow[0]})`);
      return;
    }
    fs.rmSync(dest, { recursive: true, force: true }); // clean a partial copy
  }
  log(`no copy-on-write path on ${process.platform} — leaving node_modules for "yarn install"`);
};

// --- Resolve the primary worktree -------------------------------------------
// The common git dir lives inside the primary worktree, so its parent is the
// primary worktree root. Bail out quietly if we're not in a git checkout.
let commonDir = git(['rev-parse', '--path-format=absolute', '--git-common-dir']);
if (!commonDir) commonDir = git(['rev-parse', '--git-common-dir']);
if (!commonDir) process.exit(0);

const primaryRoot = path.dirname(path.resolve(commonDir));
const worktreeRoot = git(['rev-parse', '--show-toplevel']);
if (!worktreeRoot) process.exit(0);

try {
  if (primaryRoot === path.resolve(worktreeRoot)) {
    log('running in the primary worktree — nothing to share.');
    process.exit(0);
  }
  log(`sharing local config from primary worktree: ${primaryRoot}`);
  shareConfig();
  seedNodeModules();
  log('done.');
} catch (err) {
  // Never block the `yarn install` that follows in the setup hook.
  log(`unexpected error, continuing: ${err.message}`);
}
process.exit(0);
