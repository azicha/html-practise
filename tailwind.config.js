/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html", "./src/flag/flag.html", ".src/cuttly-site/cuttly.html"],
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

