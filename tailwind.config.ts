/* eslint-disable sort-keys */

// @ts-expect-error TS(2580): Cannot find name 'module'. Do you need to install ... Remove this comment to see the full error message
module.exports = {
  darkMode: 'media',
  plugins: [],
  content: ['./pages/**/*.js', './components/**/*.js', './sections/**/*.js'],
  theme: {
    minWidth: {
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
    },
    transitionProperty: {
      height: 'height',
    },
  },
};
