import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'author': ['Inter']
    },
    extend: {
      colors: {
        black: "#141522",
        bgLighter: '#fcfcfd',
        bgLight: '#f6f6f7',
        bgDark: '#141522',
        bgPrimary: '#F5F6F7',
        primaryText: '#232431',
        textBlur: '#a9a9b0',
        textLight: '#a3a3aa'
      },
      boxShadow: {
        'input': '0 5px 30px 0 rgba(0,0,0,.1)',
        'purple':  '0 10px 30px 0 rgba(189,89,212,.5)',
        'staticCard': 'box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25)',
        'movingCard': 'box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15)'
      },
      backgroundImage: {
        greenGradient: 'linear-gradient(to right, #568c35 2%, #69a455 70%, #568c35 98%)',
        brownGradient: 'linear-gradient(-35deg, #8a6a4e 0%, #997a5f 30%, #8a6a4e 100%)',
        homeImage: 'url("./public/assets/background.jpg")'
      },
      spacing: {
        'navLeft': '16rem'
      }
    },
  },
  plugins: [
    createThemes({
      nature: {

      }
    })
  ],
}
