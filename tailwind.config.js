/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
        colors: {
          text: "#1f3329",
          background: "#d8f5e6",
          primary: "#7ed9ad",
          secondary: "#bdf3d7",
          accent: "#3f9f73"
        }
    }
  },
  plugins: []
};