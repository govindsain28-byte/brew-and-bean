import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3E2723",
          light: "#5D4037",
          dark: "#2A1A17",
        },
        accent: {
          DEFAULT: "#C89B3C",
          light: "#E0BE6F",
          dark: "#A67C2E",
        },
        cream: {
          DEFAULT: "#F8F4EE",
          dark: "#EFE8DB",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          light: "#2E2E2E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        steam: "steam 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(8deg)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scaleX(1)" },
          "50%": { opacity: "0.6", transform: "translateY(-20px) scaleX(1.3)" },
          "100%": { opacity: "0", transform: "translateY(-40px) scaleX(0.8)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(62, 39, 35, 0.25)",
        glow: "0 0 40px rgba(200, 155, 60, 0.35)",
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
