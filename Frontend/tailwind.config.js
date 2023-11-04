/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-color':'#94A684',
        'menubar-color':'#AEC3AE',
        'color1' : '#E4E4D0'
      }
    },
  },
  plugins: [],
}

