/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2def7e",

          "secondary": "#bb0acc",

          "accent": "#163da0",

          "neutral": "#1F2037",

          "base-100": "#F9F9FB",

          "info": "#1CBCF2",

          "success": "#20D590",

          "warning": "#CBA610",

          "error": "#E93A42",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
