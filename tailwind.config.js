/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max':'640px'},
      'lg': {'min' : '640px'},
    },
    extend: {
      boxShadow: {
        '++xl': '0px 0px 250px 0px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        'royalblue': {
          50: '#DADAF5',
          100: '#A5A4E7',
          200: '#6F6DD9',
          300: '#4B48CF',
          400: '#5B59C3',
          500: '#2C2B7C',
          600: '#252468',
          700: '#1E1D53',
          800: '#17163E',
          900: '#0E0E29',
          950: '#070715',
        },
      },
    },
  },
  plugins: [],
}
