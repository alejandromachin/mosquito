module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        56: "56px",
      },
      colors: {
        darkGrey: "#898989",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
