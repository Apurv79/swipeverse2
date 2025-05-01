/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-bg': '#18141F', // Background color
      },
      fontFamily: {
        sora: ['Sora', 'sans-serif'], // Add Sora font
      },
      fontSize: {
        'xxs': '10px', // Custom font size for smaller text
      },
    },
  },
  plugins: [],
}
