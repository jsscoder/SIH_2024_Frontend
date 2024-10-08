const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        Google1: ['Lilita One', 'sans-serif']
      },
      colors: {
        
        background: "rgba(var(--bg))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        bgcard: "rgba(var(--bgcard))",
        bg2card: "rgba(var(--bg2card))",
        mytext: "rgba(var(--mytext))",
        btntext: "rgba(var(--btntext))",
        btnbg: "rgba(var(--bgbtn))",
        primary:"rgba(var(--primary))",
       
      },
    
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-5px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out',
      },
       
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

