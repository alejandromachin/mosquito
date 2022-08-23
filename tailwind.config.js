module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGrey: "#898989",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
