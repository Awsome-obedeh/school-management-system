import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
         mySky:"#c3ebfa",
         mySkyLight:"#edf9fd",
         myPurple:"#cfceff",
         myPurpleLight:"#f1off",
         myYellow:"#fa327c",
         myYellowLight:"#fefce8",
      }
    },
  },
  plugins: [],
};
export default config;
