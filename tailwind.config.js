module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["index.html"],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: "#06070d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
