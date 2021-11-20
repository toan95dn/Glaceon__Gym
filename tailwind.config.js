module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        '1': '.1em',
      },
      borderWidth:{
        'fill': '100rem',
      },
      backgroundImage:{
        'home-background': "url('images/Gym_background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
