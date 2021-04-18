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
    extend: {
      outline: {
        blue: '1px solid rgba(30, 64, 175, 1)',
        gray: '1px solid rgba(156, 163, 175, 1)',
      },
    },
    transitionProperty: {
      height: 'height',
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
