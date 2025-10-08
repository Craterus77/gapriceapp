/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark_green': {
          DEFAULT: '#1a1f1a',
          100: '#0d0f0d',
          200: '#141614',
          300: '#1a1f1a',
          400: '#242a24',
          500: '#2d352d',
          600: '#3d483d',
          700: '#4d5a4d',
          800: '#6b7a6b',
          900: '#8a9b8a'
        },
        'hunter_green': {
          DEFAULT: '#2d4a2d',
          100: '#0e150e',
          200: '#1b2a1b',
          300: '#2d4a2d',
          400: '#3d5f3d',
          500: '#4d734d',
          600: '#5d875d',
          700: '#7aa17a',
          800: '#9bb89b',
          900: '#c2d6c2'
        },
        'fern_green': {
          DEFAULT: '#4d7c4d',
          100: '#162816',
          200: '#2c4f2c',
          300: '#4d7c4d',
          400: '#5f9c5f',
          500: '#71b371',
          600: '#8bc88b',
          700: '#a5d7a5',
          800: '#c0e4c0',
          900: '#ddf1dd'
        },
        'moss_green': {
          DEFAULT: '#6b9b6b',
          100: '#1f2d1f',
          200: '#3d5a3d',
          300: '#4d734d',
          400: '#5f875f',
          500: '#6b9b6b',
          600: '#7faf7f',
          700: '#99c399',
          800: '#b5d4b5',
          900: '#d6e8d6'
        },
        'mindaro': {
          DEFAULT: '#ecf39e',
          100: '#424809',
          200: '#858f12',
          300: '#c7d71b',
          400: '#deea58',
          500: '#ecf39e',
          600: '#f0f6b3',
          700: '#f4f8c6',
          800: '#f8fad9',
          900: '#fbfdec'
        },
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
