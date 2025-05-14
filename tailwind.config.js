import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter Variable", "sans-serif"],
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
