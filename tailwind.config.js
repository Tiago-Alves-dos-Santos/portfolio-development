/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue}",
    "./src/**/**/*.{html,js,vue}"
  ],
  theme: {
    extend:{
      colors: {
        primary : {
          100: '#666666',
          200: '#5c5c5c',
          300: '#525252',
          400: '#3d3d3d',
          500: '#333333',
          600: '#292929',
          700: '#1f1f1f',
          800: '#141414',
          900: '#000000',
        }
      },
    },
    fontFamily: {
    },
  },
  plugins: [],
}

