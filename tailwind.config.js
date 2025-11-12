const { getDisplayName } = require('next/dist/shared/lib/utils');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir", "sans-serif"],
      },
      backgroundImage: {
        hamMenu:url("./public/assets/icons/hamburger.png")
      }
    

    },
    plugins: [],
  }
}
