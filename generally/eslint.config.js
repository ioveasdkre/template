// * 作法一 使用 eslint
// import js from '@eslint/js';
// import globals from 'globals';
// import { defineConfig } from 'eslint/config';
// import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
// import typescriptEslintParser from '@typescript-eslint/parser';
// import prettierPlugin from 'eslint-plugin-prettier';
// import configPrettier from 'eslint-config-prettier';

// export default defineConfig([
//   {
//     files: ['**/*.{js,mjs,cjs,ts}'],
//     ignores: ['src/**/*.test.ts', 'src/frontend/generated/*', '**/*.config.js'],
//     languageOptions: {
//       parser: typescriptEslintParser,
//       parserOptions: {
//         sourceType: 'module',
//         project: ['./tsconfig.json'],
//       },
//     },
//     plugins: { js, '@typescript-eslint': typescriptEslintPlugin, prettier: prettierPlugin },
//     extends: ['js/recommended', configPrettier],
//     languageOptions: { globals: globals.browser },
//     rules: {
//       'prettier/prettier': 'error',
//     },
//   },
// ]);

// * 作法二 使用 typescript-eslint
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier/recommended';

export default tseslint.config(eslint.configs.recommended, tseslint.configs.recommended, prettier);
