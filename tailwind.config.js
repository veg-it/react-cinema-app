/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        150: '156px',
        300: '227px',
      },
      height: {
        150: '156px',
        300: '227px',
      },
    },
  },
  plugins: [],
}
