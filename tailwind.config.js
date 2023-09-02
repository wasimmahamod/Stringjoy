/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Crimson Text','serif'],
        secandry: ['Overpass','sans-serif'],
      },
    },
  },
  plugins: [],
}

