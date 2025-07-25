/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}