import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    ignores: ['src/**/*.test.ts', 'src/frontend/generated/*', '**/*.config.js'],
    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        sourceType: 'module',
      },
    },
    plugins: { js, '@typescript-eslint': typescriptEslintPlugin, prettier: prettierPlugin },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },
]);
