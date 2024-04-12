/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      transitionTimingFunction:{
        'in-expo': 'cubic-bezier(0.165, 0.084, 0.44, 1)',
      }
    },
  },
  plugins: [],
}

