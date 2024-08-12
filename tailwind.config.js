/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#14AFCF",
        "background": "#121F2B",
        "accent": "#011627",
      },
      fontFamily: {
        sans: ['var(--font-tommy)'],
        mono: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
