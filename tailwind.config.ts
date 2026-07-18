import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vista: ['"Segoe UI"', "Tahoma", "Geneva", "Verdana", "sans-serif"],
        mono: ['"Consolas"', '"Courier New"', "monospace"],
      },
      colors: {
        vista: {
          blue: "#3a7ec0",
          navy: "#0a246a",
          glass: "#a8d0f0",
          task: "#1e468c",
        },
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
