/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  animation: {
    shine: "shine 1.5s ease-in-out forwards",
  },
  keyframes: {
    shine: {
      "0%": { transform: "translateX(-100%)" },
      "100%": { transform: "translateX(200%)" },
    },
  },
},

  },
  plugins: [],
}

