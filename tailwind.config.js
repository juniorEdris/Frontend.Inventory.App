/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundColor: {
        light: "#fff",
        primary: "#2b8768",
        dark: "#1b1d22",
        "primary-hover": "#1f604a",
        secondary: "#1c2e45",
      },
      colors: {
        light: "#fff",
        primary: "#2b8768",
        dark: "#1b1d22",
        "primary-hover": "#1f604a",
        secondary: "#1c2e45",
      },
    },
  },
  plugins: [],
};
