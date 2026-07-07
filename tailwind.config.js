import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg: "var(--bg)",
          surface: "var(--surface)",
          muted: "var(--muted)",
          accent: "var(--accent)",
          "accent-2": "var(--accent-2)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "Times New Roman", "Times", "serif"],
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

export default config;
