/* eslint-disable sort-keys */
module.exports = {
  darkMode: false, // or 'media' or 'class'
  plugins: [],
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js', './sections/**/*.js'],
    options: {
      css: ['./components/**/*.css'],
      safelist: [/^btn.*/],
    },
  },
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
    extend: {
      outline: {
        blue: '1px solid rgba(30, 64, 175, 1)',
        gray: '1px solid rgba(156, 163, 175, 1)',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      inset: ['checked'],
      opacity: ['disabled'],
      textColor: ['active'],
    },
  },
};
