const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Inter', 'system-ui', 'sans-serif'],
      body: ['Inter', 'system-ui', 'sans-serif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      amber: colors.amber,
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      green: colors.green,
      gray: colors.trueGray,
      pink: colors.pink,
      yellow: colors.yellow
    },
    extend: {
      height: {
        xx: '12%',
        xs: '10%',
        xss: '6.66%'
      },
      width: {
        xx: '14%',
        xs: '10%',
        xss: '6.66%'
      },
      colors: {
        orapa: '#9AAE4F'
      }
    }
  },
  variants: {
    extend: {},
    animation: ['responsive', 'motion-safe', 'motion-reduce']
  },
  plugins: []
}
