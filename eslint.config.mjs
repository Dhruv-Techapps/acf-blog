import js from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // global ignores
  {
    ignores: ['.cache/**', '.netlify/**', '_site/**', 'node_modules/**', 'resources/**']
  },
  {
    languageOptions: {
      ecmaVersion: 2019,
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error'
    }
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs'],
    rules: {
      'no-return-await': 'error',
      // Semicolons and spacing are Prettier's call — see `.prettierrc`, shared with the other repos.
      'prefer-template': 'error',
      strict: 'error'
    }
  },
  {
    files: ['scripts/**'],
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin
      }
    }
  }
];
