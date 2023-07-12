/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: 'linear-gradient(180deg, #1D1E28 0.06%, #261C2D 94.83%, #261A2D 100%)'
      }
    },
    colors: {
      grayishblue: 'hsl(237, 18%, 59%)',
      softRed: 'hsl(345, 95%, 68%)',
      white: 'hsl(0, 0%, 100%)',
      darkDesaturatedBlue: '#343650', 
      veryDarkBlue: 'hsl(235, 16%, 14%)',
      mostlyBlackBlue: 'hsl(234, 17%, 12%)',
      black: '#000'
    }
  },
  plugins: [],
}