import { defineConfig } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    {
        ignores: ['node_modules/**', '.next/**']
    },
    {
        // TODO: add next/typescript but for now their it too many errors: ~9100
        extends: compat.extends("next/core-web-vitals"),
    },
    {
        files: ['**/*.tsx'],
        rules: {
            '@typescript-eslint/no-empty-object-type': 'off'
        }
    }
]);
