import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  important: true,

  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        "menu-font": "14px",
      },
      borderColor: {
        blueish: {
          100: "#4299E2",
          200: "#91CAFF",
        },
        greyish: {
          100: "#CED0D1",
          200: "#8D95A3",
          300: "#C7C9CA",
        },
        greenish: {
          100: "#87E8DE",
        },
        redish: {
          100: "#C70000",
        },
      },

      padding: {
        "universal-padding": "auto auto 12px auto",
      },
      backgroundColor: {
        disable: "#8D95A3",
        blue: "#247DC9",
        greenish: {
          100: "#8AD9D9",
          200: "#3FC8AA33",
          300: "#E6FFFB",
          400: "#E6F4FF",
        },
        redish: {
          100: "#A6030333",
        },
        greyish: {
          100: "#FAFAFA",
        },
      },

      colors: {
        black: "#2B3144",
        black1: "#1C2B48",
        black2: "#2B3674",
        black3: "#707EAE",
        black3Light: "rgba(112, 126, 174, 0.5)",
        blue: "#4299E2",
        danger: "#FF0000",

        primary: {
          100: "#4299E2",
          200: "#2B3144",
          "primary-text": "#2B3144",
          400: "#34373C",
        },
        greyish: {
          100: "#E8E8E8",
          200: "#9BA2AE",
          300: "#D0D4DA",
          400: "#8B8B8B",
          "switch-color": "rgba(0, 0, 0, 0.25)",
          "icon-gray": "#d9d9d9",
          "small-heading": "#6B7280",
        },
        greenish: {
          100: "#03A66D",
          200: "#08979C",
        },
        blueish: {
          100: "#3B81F5",
        },
        redish: {
          100: "rgba(255, 0, 0, 0.2)",
          200: "#A60303",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // plugins: [require("prettier-plugin-tailwindcss")],
};
export default config;
