/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        articulat_cf: ["articulat-cf, sans-serif"],
        artifex_cf: ["artifex-cf, serif"],
        primary_font: ["articulat-cf, sans-serif"],
        secondary_font: ["artifex-cf, serif"],
      },
      colors: {
        "milano": {
          50: "#FEE6E1",
          100: "#FECDC3",
          200: "#FD9B87",
          300: "#FC6D50",
          400: "#FA3A14",
          500: "#CD2504",
          600: "#A51E03",
          700: "#7D1702",
          800: "#500F02",
          900: "#280701",
          950: "#140400"
        },
        "cerulean": {
          50: "#E1FAFE",
          100: "#C3F4FE",
          200: "#87E9FD",
          300: "#50DFFC",
          400: "#14D4FA",
          500: "#04ACCD",
          600: "#038AA5",
          700: "#02697D",
          800: "#024350",
          900: "#012128",
          950: "#001114"
        },
        "rock": {
          50: "#F8F8F7",
          100: "#F1F0EE",
          200: "#E4E2DD",
          300: "#D6D3CC",
          400: "#C8C4BB",
          500: "#BBB6AB",
          600: "#9B9383",
          700: "#766F60",
          800: "#4F4A40",
          900: "#272520",
          950: "#141310"
        }
      },
    },
  },
  plugins: [],
}