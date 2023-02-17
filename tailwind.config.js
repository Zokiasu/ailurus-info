/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#236679",
        secondary: "#E6F1F4",
        tertiary: "#011824",
      },
    },
  },
  plugins: [],
};
