/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  plugins: [],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
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
      'max-height': 'max-height',
    },
  },
};
