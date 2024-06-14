/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./**/*.{html,js}`],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor:"#050C2A",
    },
    padding: {
      big: "50px",
    }
  },
  plugins: [],
},
}