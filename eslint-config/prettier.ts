// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  'prettier/prettier': [
    'error',
    { arrowParens: 'avoid', singleQuote: true, trailingComma: 'es5' },
  ],
};