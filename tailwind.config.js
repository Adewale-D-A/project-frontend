/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, #ffffff 1.04%, #55c7ed 97.4%)",
      },
      colors: {
        primary: {
          500: "#10476D",
        },
      },
    },
  },
  plugins: [],
};
