/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Poppins", 'sans-serif'], // Corrected syntax
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}