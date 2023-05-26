/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        150: '150px',
        300: '300px',
      },
      height: {
        150: '150px',
        300: '227px',
      },
    },
  },
  plugins: [],
}
