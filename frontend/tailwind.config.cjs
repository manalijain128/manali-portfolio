/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e3a8a',
        accent: '#3b82f6',
        gold: '#60a5fa'
      },
      fontFamily: {
        display: ['Inter', 'system-ui']
      }
    }
  },
  plugins: [],
}
