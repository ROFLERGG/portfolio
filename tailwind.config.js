/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: '#ffff',
      'black-100': '#0d0d0d',
      grey: '#4d4d4d'
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        default: '800px'
      }
    },
    extend: {},
  },
  plugins: [],
}

