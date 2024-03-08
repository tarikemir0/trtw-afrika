/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        footer: '#01000d',
        footerh4: '#00b6ca ',
        footerp:'#D1D9D9'
      },
    },
  },
  plugins: [],
}

