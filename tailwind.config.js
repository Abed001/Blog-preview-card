/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        Yellow: 'hsl(47, 88%, 63%)',

        // Neutral

        White: ' hsl(0, 0%, 100%)',
        Grey: 'hsl(0, 0%, 50%)',
        Black: 'hsl(0, 0%, 7%)',
      },
      fontFamily: {
        Figtree: 'Figtree, sans-serif',
      },
      fontSize: {
        bodycopy: "16px",
      },
      fontWeight: {
        normal: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
}