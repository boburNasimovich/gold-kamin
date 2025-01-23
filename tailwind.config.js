/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero-pattern1':"url('../img/sviper_img.webp')",
        'hero-pattern2':"url('../img/sviper_img2.webp')",
        'hero-pattern3':"url('../img/sviper_img3.webp')",
      },
      fontFamily:{
        'montserrat':["Montserrat", 'sans-serif'],
      }
    },
  },
  plugins: [],
}