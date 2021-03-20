module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        ...theme("colors"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
        card: "#111111",
        border: "#171717",
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: theme("colors.gray.300", "currentColor"),
        primary: "#3490dc",
        secondary: "#ffed4a",
        danger: "#e3342f",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
