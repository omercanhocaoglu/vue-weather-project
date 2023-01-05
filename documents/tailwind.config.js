/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    // extend: {
      colors: {
        'indigo-lighter': '#b3bcf5',
        'indigo': '#5c6ac4',
        'indigo-dark': '#202e78',
        "color-primary": "#3B82F6",
        "color-secondary": "#9CA3AF"
      },
    // },
    
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },

    container: {
      padding:"2rem",
      center: true,
    },

    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
}
