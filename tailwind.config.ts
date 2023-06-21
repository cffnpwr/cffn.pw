import { Config } from "tailwindcss";

const config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coffee: {
          50: "#f6f4f0",
          100: "#e9e2d8",
          200: "#d5c4b3",
          300: "#bda187",
          400: "#aa8365",
          500: "#9b7157",
          600: "#7b5544",
          700: "#6b473d",
          800: "#5b3e38",
          900: "#503633",
          950: "#2d1c1b",
        },
        hover: "#0000000B",
        accent: "#cc9074",
      },
      fontFamily: {
        koruri: ["Koruri"],
        "sans-forgetica": ["Sans Forgetica"],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
