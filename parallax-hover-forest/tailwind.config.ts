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
        logo: "url(/logo.png)",
        "layer-1": "url(/layer-1.jpg)",
        "layer-2": "url(/layer-2.png)",
        "layer-5": "url(/layer-5.png)",
        "layer-6": "url(/layer-6.png)",
      },
      colors: {
        "gray-border": "rgba(255, 255, 255, .4)",
      },
    },
  },
  plugins: [require("tailwindcss-3d")],
};
export default config;
