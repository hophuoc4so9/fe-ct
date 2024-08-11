/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        neutral:{
          500:"#6B6B6B"
        }
      }
    },
    
  },
  plugins: [],
}

