/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        'corPrincipal': '#2467e4',
      },
      backgroundImage: {
        'image-hero': "url('/globo-terrestre.png')",
      }
    },
  },
  plugins: [],
}