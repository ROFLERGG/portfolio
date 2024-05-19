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
    extend: {
      animation: {
        appear: 'appear 1s ease forwards'
      },
      keyframes: {
        appear: {
          '0%': { transform: 'translateY(48px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      }
    },
  },
  plugins: [],
}

