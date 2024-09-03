/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
       
    },
  },
  plugins: [],
}

