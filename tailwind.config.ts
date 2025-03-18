import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dim-gray": "#666666",
        "corn-flower-blue": "#42446E",
      },
      backgroundImage: {
        'gr': 'linear-gradient(to right, #F093FB 3%, #F5576C 100%)',
      },
      fontFamily: {
        sans: ['DM Sans', 'Arial', 'sans-serif'],
        poppins: ["Poppins", "sans-serif"],
      }
    },
  },
} satisfies Config;
