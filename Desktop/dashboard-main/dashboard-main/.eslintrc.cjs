/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:jest-dom/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
    tsconfigRootDir: '.',
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: ['@typescript-eslint', 'react'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'react/jsx-uses-react': 1,
    'react/jsx-max-props-per-line': [
      2,
      {
        maximum: 1,
        when: 'multiline',
      },
    ],
    'prettier/prettier': 2,
    'arrow-body-style': ['error'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/no-use-before-define': [
          'error',
          { variables: false },
        ],
      },
    },
  ],
}
