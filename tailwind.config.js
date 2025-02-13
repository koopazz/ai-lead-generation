/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Libre Baskerville', 'Baskerville', 'Baskerville Old Face', 'Hoefler Text', 'Garamond', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};