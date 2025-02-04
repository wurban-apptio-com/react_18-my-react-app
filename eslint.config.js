/*********************************************************************
 * © Copyright IBM Corp. 2024
 *********************************************************************/
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintPluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'eslint-plugin-import': eslintPluginImport,
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'no-console': 'error',
      camelcase: 'error',
      'no-plusplus': 'error',
      'no-duplicate-imports': 'error',
      'eslint-plugin-import/no-default-export': 'error',
      ...react.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-fragments': 'error',
      'react/jsx-no-useless-fragment': 'error',
      'react/button-has-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
    },
  },
);
