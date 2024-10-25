/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'deepblue' : '#1B1F24',
        'gray' : '#909090',
        'bonewhite' : {
          200: '#ffffff20'
        }
      },
      fontFamily: {
        albertsans: ['Albert Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

