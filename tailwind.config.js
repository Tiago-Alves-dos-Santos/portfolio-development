/** @type {import('tailwindcss').Config} */
/** npx tailwindcss -i src/input.css -o src/assets/output.css --watch */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js,vue}",
    "./src/**/**/*.{html,js,vue}",
  ],
  darkMode: 'class',
  theme: {
    extend:{
      colors: {
        'gray-rgba':'rgba(145, 145, 145, .8)',
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
    backgroundImage: {
      'code': "url('/src/assets/code_tag.jpg')",
    },
    fontFamily: {
    },
  },
  plugins: [],
}

