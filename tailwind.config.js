/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkGrayishBlue: "hsl(237, 12%, 33%)",
        darkGrayishBlue: " hsl(240, 6%, 50%)",
        lightGrayishBlue: "hsl(240, 5%, 91%)",
        softViolet: "hsl(273, 75%, 66%)",
        softBlue: "hsl(240, 73%, 65%)",
        veryDarkDesaturatedBlue: "hsl(238, 29%, 16%)",
        desaturatedBlue: "#4B4C5F",
        softRed: "hsl(14, 88%, 65%)",
      },
    },
  },
  plugins: [],
};
