/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
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
        dark: "oklch(20.8% 0.042 265.755)",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
