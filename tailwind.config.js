/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background-200": "var(--color-background-200)",
      "background-300": "var(--color-background-300)",
      "background-400": "var(--color-background-400)",
      "contrast-200": "var(--color-foreground-200)",
      "contrast-400": "var(--color-foreground-400)",
      text: "var(--color-text)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
