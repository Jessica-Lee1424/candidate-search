export default {
    // other rules...
    parser: '@typescript-eslint/parser',
    extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-type-checked', // or 'plugin:@typescript-eslint/strict-type-checked'
      // Optionally add stylistic rules
      // 'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: ['./tsconfig.json', './tsconfig.node.json'],
      tsconfigRootDir: __dirname,
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
    rules: {
      // Add any custom rules here
    },
  };