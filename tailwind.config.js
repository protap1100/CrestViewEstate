// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto': ["Roboto Slab", 'serif'],
        'Poppins': ["Poppins", 'sans-serif']
      },
      colors: {
        'primary': '#FF6347', 
        'secondary': '#6A5ACD', 
        'btn': '#70a1ff',
        'btn-border':'#1e90ff',
        'border': '#5352ed',
        'TopBackground': '#262626',
      },
    },
  },
  plugins: [
    require("daisyui"),
  ],
};
