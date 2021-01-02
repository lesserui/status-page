module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['index.html'],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
