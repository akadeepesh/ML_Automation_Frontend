/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackShade: "#33435E",
        blackish: "#0F1618",
        greenish: "#28A17D",
        brownish: "#ccc",
        blueish : "#79E6F3",
        // #566BC8
        khatta: "#313D37"
      },
    },
  },
  plugins: [],
}