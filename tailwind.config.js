/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        sm: "3rem",
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
}
