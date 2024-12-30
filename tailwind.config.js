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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              fontWeight: "800", // Sehr dick
              fontSize: theme("fontSize.3xl"), // Groß
              textDecoration: "none", // Keine Unterstreichung
              a: {
                textDecoration: "none", // Links in h2 ohne Unterstreichung
                color: "inherit", // Farbe erbt vom Text
              },
            },
            h3: {
              fontWeight: "700", // Dick
              fontSize: theme("fontSize.2xl"), // Etwas kleiner
              textDecoration: "none", // Keine Unterstreichung
              a: {
                textDecoration: "none", // Links in h2 ohne Unterstreichung
                color: "inherit", // Farbe erbt vom Text
              },
            },
            h4: {
              fontWeight: "600", // Mittel-dick
              fontSize: theme("fontSize.xl"), // Noch kleiner
              textDecoration: "none", // Keine Unterstreichung
              a: {
                textDecoration: "none", // Links in h2 ohne Unterstreichung
                color: "inherit", // Farbe erbt vom Text
              },
            },
            h5: {
              fontWeight: "500", // Normal-dick
              fontSize: theme("fontSize.lg"), // Klein
              textDecoration: "none", // Keine Unterstreichung
              a: {
                textDecoration: "none", // Links in h2 ohne Unterstreichung
                color: "inherit", // Farbe erbt vom Text
              },
            },
            h6: {
              fontWeight: "500", // Normal-dick
              fontSize: theme("fontSize.base"), // Sehr klein
              textDecoration: "none", // Keine Unterstreichung
              a: {
                textDecoration: "none", // Links in h2 ohne Unterstreichung
                color: "inherit", // Farbe erbt vom Text
              },
            },

            "li::marker": {
              color: "white",
            },
            hr: {
              border: 0,
              height: "1px",
              background: "white",
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
};
