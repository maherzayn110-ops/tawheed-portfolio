// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       colors: {
//         luxuryBlack: "#0a0a0a",
//         luxuryGray: "#111111",
//         gold: "#c8a951",
//       },
//       fontFamily: {
//         luxury: ["Cinzel", "serif"],
//         body: ["Inter", "sans-serif"],
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        luxuryBlack: "#0a0a0a",
        luxuryGray: "#111111",
        gold: "#c8a951",
      },
      fontFamily: {
        luxury: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
