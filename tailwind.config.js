/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'twitter-color': '#1DA1F2',
        'linkedin-color': '#0077b5',
      },
    },
  },
  plugins: [],
}
