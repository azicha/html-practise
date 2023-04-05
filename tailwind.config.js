/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        ubuntu: [ 'Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

