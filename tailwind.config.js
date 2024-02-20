/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        blueish: 'rgb(0, 131, 148)',
        dark: '#333333',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
};
