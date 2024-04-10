/* eslint-disable no-undef */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      primary: "#EA2027",
      secondary: "#1B1464",
    },
  },
  plugins: [require("tailwind-scrollbar"), require("preline/plugin")],
});
