import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      animation: {
        translateUp: "translateUp 0.5s ease-out",
      },
      keyframes: {
        translateUp: {
          "0%": { transform: "translateY(60px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
