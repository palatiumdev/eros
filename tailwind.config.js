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
        "primary": "#fffffb",
        "background": "#162442",
        "accent": "#121D36",
        "white": "#fffffb",
      },
      fontFamily: {
        sans: ['var(--font-tommy)'],
        mono: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
