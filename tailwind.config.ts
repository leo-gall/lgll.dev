import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        funnel: ["FunnelSans", "sans-serif"],
        kranky: ["Kranky", "sans-serif"],
      },
      colors: {
        sw: "#ffa500",
      },
    },
  },
  plugins: [typographyPlugin],
};
