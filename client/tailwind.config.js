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
        primary: "#111111",
        blackBackground: "#222222"
      },
      boxShadow: {
        'input': '0 5px 30px 0 rgba(0,0,0,.1)',
        'purple':  '0 10px 30px 0 rgba(189,89,212,.5)'
      }
    },
  },
  plugins: [],
}

