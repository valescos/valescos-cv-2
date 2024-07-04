/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Playfair Display", "Arial", "Helvetica", "sans-serif"],
        body: ["Source Sans 3", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
