// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  camelcase: 'warn',
  'comma-dangle': 0,
  'import/prefer-default-export': 0,
  'no-console': 'warn',
  'no-nested-ternary': 'warn',
  'no-underscore-dangle': 0,
  'no-unused-expressions': ['error', { allowTernary: true }],
  'object-curly-spacing': ['error', 'always'],
  'sort-keys': [
    'error',
    'asc',
    { caseSensitive: true, minKeys: 2, natural: false },
  ],
};