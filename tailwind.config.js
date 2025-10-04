/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3c6e71',
          dark: '#284b63',
          light: '#4a8a8e',
        },
        charcoal: '#353535',
        'light-gray': '#d9d9d9',
      },
    },
  },
  plugins: [],
};
