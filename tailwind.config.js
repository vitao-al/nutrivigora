/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00A7E1',
        secondary: '#1B4B68',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};