/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
      },
      keyframes: {
        'modal-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '70%': { transform: 'scale(1.05)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'modal-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' }
        }
      },
      animation: {
        'modal-in': 'modal-in 0.35s ease-out forwards',
        'modal-out': 'modal-out 0.25s ease-in forwards'
      }
    },
  },
  plugins: [],
};
