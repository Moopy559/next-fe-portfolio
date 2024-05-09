import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        darkPurple: "#120128",
        lightPink: "#f3e5ff",
        violet: "#43028d",
        pink: "#fc5fcf",
        hotPink: "#f60469",
      },
      textDecorationColor: {
        hotPink: "#f60469",
      },
      borderColor: {
        hotPink: "#f60469",
      },
    },
  },
  plugins: [],
};
export default config;
