/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(100%)' },
          '100%': { transform: 'scale(110%)' }
        }
      },
      animation: {
        zoomIn: 'zoomIn 3s forwards'
      }
    },
  },
  plugins: [],
}
