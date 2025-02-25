/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        formBG: "hsla(0, 0%, 87%, 0.3)"
      },
      borderColor: {
        borderClr: "#4342424f"
      }

    },
  },
  plugins: [],
}