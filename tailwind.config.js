/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      animation: {
        flicker: 'flicker 2.5s infinite',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        goldenrod: '#DAA520', // Custom golden color
        'transparent-black': 'rgba(0, 0, 0, 0.5)' // Semi-transparent black for overlay
      },
      spacing: {
        '128': '32rem', // Custom spacing if needed
      },
    },
  },
  darkMode: "class",
plugins: [require("tw-elements-react/dist/plugin.cjs")]
  
};
