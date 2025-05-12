/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,astro,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],         
        display: ['Playfair Display', 'serif'],  
      },
    },
  },
  plugins: [],
}
