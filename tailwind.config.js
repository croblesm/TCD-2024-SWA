/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "tech-blue": {
          800: "#010e42",
          500: "#150faf",
          400: "#320ee0",
        },
        "tech-purple": {
          800: "#950e75",
          600: "#680db0",
          500: "#c10b7a",
        },
        "tech-gray": {
          800: "#3A3A39",
          700: "#373737",
          500: "#646464",
          400: "#979797",
          300: "#F5F5FA",
          200: "#FCFCFC",
        },
      },
      fontFamily: {
        futura: ["FuturaCondensed", "sans-serif"],
        fira: ["FiraCode", "monospace"],
      },
    },
  },
  plugins: [],
};
