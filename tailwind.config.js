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
        bg_card: "rgba(var(--bgcard))",
        bg2_card: "rgba(var(--bg2card))",
        mytext: "rgba(var(--mytext))",
        btntext: "rgba(var(--btntext))",
        bg_btn: "rgba(var(--bgbtn))",
      },
      colors:{
        primary:"#1490de"
      },
      keyframes:{
        leftside:{
          '0%':{
            transform: "translate(100% 0)",
            rounded:"l-xl"
          },
          '100%':{
            transform: "translate(-100% 0)",
            rounded:"r-xl"
          }
        },
        rightside:{
          '0%':{
            left:0
          },
          '100%':{
            right:0
          }
        }
      },
      animation:{
        leftside:"leftside 1s ease-in-out",
        rightside:"rightside 1s ease-in-out"
      }
       
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

