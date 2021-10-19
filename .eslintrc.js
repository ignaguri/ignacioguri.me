const base = require('./eslint-config/base');
const next = require('./eslint-config/next');
const node = require('./eslint-config/node');
const prettier = require('./eslint-config/prettier');
const react = require('./eslint-config/react');
const reactHooks = require('./eslint-config/react-hooks');

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    'shared-node-browser': true,
  },
  extends: ['airbnb', 'prettier'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    babelOptions: {
      presets: ['next/babel', '@babel/preset-react'],
    },
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },
  plugins: ['node', 'prettier', 'react-hooks'],
  reportUnusedDisableDirectives: true,
  rules: {
    ...base,
    ...next,
    ...node,
    ...prettier,
    ...react,
    ...reactHooks,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
