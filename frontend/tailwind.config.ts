import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Balanced Brand Colors
        primary: "#4A5CF3", // Back to the original purple-blue
        "deep-navy": "#2C2C54",
        "off-white": "#F9F9F6", // Back to original off-white
        "accent-pink": "#FCA3CC", // Soft pink accent
        "soft-purple": "#E8D5FF", // Lavender
        "lavender": "#B8A9FF", // Medium lavender
        "cream": "#FFF9E6", // Warm cream
        white: "#FFFFFF",

        // Additional semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Main heading: Elegant script for personal touch
        heading: ["Dancing Script", "cursive"],
        // Subheadings and navigation: Clean serif
        subheading: ["Playfair Display", "serif"],
        // Body and UI: Consistent sans-serif
        body: ["Nunito", "sans-serif"],
        sans: ["Nunito", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "scale-hover": "scaleHover 0.2s ease-in-out",
        "marquee": "marquee 30s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      borderRadius: {
        "2xl": "1rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};

export default config;
