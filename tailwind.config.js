/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "oklch(37.9% 0.146 265.522)",
        primary1: "oklch(42.4% 0.199 265.638)",
        secondary: "oklch(55.4% 0.046 257.417)",
        dark: "#111F35",
        dark_text: "oklch(69.6% 0.17 162.48)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
