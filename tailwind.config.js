export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        // 🌿 Premium Warm Luxury Red Palette
        premiumRed: "#C83A3A",        // Primary red
        premiumRedDark: "#A12727",    // Deep red for hover
        softRedBg: "#FDEAEA",         // Light red background tint
        premiumGold: "#F4C044",       // Gold accent
        darkText: "#1A1A1A",          // Main dark text
      },
    },
  },

  plugins: [require("daisyui")],
};
