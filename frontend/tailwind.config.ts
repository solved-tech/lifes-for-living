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
        // Modern Professional Colors
        primary: "#2563EB", // Modern blue
        "deep-navy": "#1E293B", // Slate 800
        "off-white": "#F8FAFC", // Slate 50
        "accent-teal": "#0D9488", // Teal 600
        "accent-orange": "#EA580C", // Orange 600
        "soft-gray": "#E2E8F0", // Slate 200
        "medium-gray": "#64748B", // Slate 500
        "cream": "#FFFBEB", // Amber 50
        white: "#FFFFFF",

        // Additional semantic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Main heading: Bold, technical font
        heading: ["Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        // Subheadings: Strong and readable
        subheading: ["Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        // Body and UI: Professional sans-serif
        body: ["Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        sans: ["Roboto", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["Roboto Mono", "Consolas", "Monaco", "monospace"],
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
