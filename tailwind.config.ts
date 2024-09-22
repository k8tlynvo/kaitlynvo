import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans: ["var(--font-outfit)", "sans-serif"]
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "page": "neutral-100",
        "default-text": "#1c1917",
        "sub-text": "#78716c",
        "accent-text": "#be185d"
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInFromLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-10%)' }, // Adjust as needed
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInFromBottom: {
          '0%': { opacity: '0', transform: 'translateY(10%)' }, // Adjust as needed
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-out",
        slideInFromLeft: 'slideInFromLeft 1s ease-out',
        fadeInFromLeft: 'fadeInFromLeft 1s ease-out',
        fadeInFromBottom: 'fadeInFromBottom 1s ease-out',
      }
    },
  },
  plugins: [],
};
export default config;
