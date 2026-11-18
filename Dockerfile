# Production image for pdd.dprslt.fr (Next.js standalone server).
#
# Built by .github/workflows/build-image.yml and pushed to
# ghcr.io/dprslt/pdd-gliding. Consumed by the `pdd` Docker Swarm stack on
# bigwhale.tily.fr (hehol-airspace/deploy/stacks/pdd/docker-stack.yml).
#
# `output: 'standalone'` is opt-in through BUILD_STANDALONE (see
# next.config.mjs), so a plain `yarn build` and the Vercel build are untouched.

# --- Build stage ------------------------------------------------------------
FROM node:24-alpine AS builder
WORKDIR /app

# Yarn 1 is the lockfile's package manager (package.json#packageManager).
RUN apk add --no-cache yarn

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV BUILD_STANDALONE=true

# Consumed by the `postbuild` next-sitemap step (robots.txt / sitemap.xml).
# Not a secret; overridable per build with --build-arg.
ARG SITE_URL=https://pdd.dprslt.fr
ENV SITE_URL=${SITE_URL}

RUN yarn build

# --- Production stage -------------------------------------------------------
FROM node:24-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Static assets are served by the app itself (PWA icons, sw.js). The cache
# directory must be writable by the unprivileged user.
RUN mkdir -p /app/.next/cache && chown -R nextjs:nodejs /app/.next

USER nextjs

EXPOSE 3000

# Everything else (HOLFUY_PASSWD, SITE_URL, …) comes from the Swarm service
# environment at runtime, so no .env file is baked into the image.
CMD ["node", "server.js"]
