import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-noir-pro)"],
      },
      transitionDuration: {
        '300': '300ms',
      },
      colors: {
        primary: { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a", 950: "#172554" },
        lightblue: {
          100: "#E3F5FF",
          200: "#B1E3FF",
          300: "#A8C5DA",
        },
        lightgreen: {
          100: "#BAEDBD",
          200: "#A1E3CB",
        },
        lightpurple: {
          100: "#E5ECF6",
          200: "#C6C7F8",
          300: "#95A4FC",
        },
        lightred: "#FF4747",
        lightwhite: "#F7F9FB",
        lightyellow: "#FFE999",
      },
    },
  },
};
export default config;
