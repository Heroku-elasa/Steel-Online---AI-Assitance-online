/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui'],
        heading: ['Vazirmatn', 'ui-serif', 'Georgia'],
      },
      colors: {
        'brand-black': '#22281e',
        'brand-green': '#034737',
        'brand-purple': '#522148',
        'sage-1': '#f4f7f3',
        'sage-2': '#e9efe7',
        'sage-3': '#d7e0d4',
        'sage-5': '#72836d',
        'green-high': '#a9ff9b',
        'yellow-high': '#dcff79',
        'blue-high': '#a0ffe5',
        'red-high': '#ffa486',
        'red-low': '#ffd9be',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(34, 40, 30, 0.05)',
      }
    },
  },
  plugins: [],
}