import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#e55a1f",
          light: "#ff7340",
          dark: "#b44415",
        },
        secondary: {
          DEFAULT: "#1a1a1a",
          light: "#2a2a2a",
          dark: "#0a0a0a",
        },
        accent: {
          DEFAULT: "#ffa500",
          light: "#ffc04d",
          dark: "#cc8400",
        },
      },
      fontFamily: {
        almarai: ['Almarai', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(229, 90, 31, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(229, 90, 31, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;

