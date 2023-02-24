/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens: {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'

    },
    extend: {
      colors:{
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: "hsl(12,88%,69%)",
        brightRedSupLight: "hsl(12,88%,95%)",
        darkBlue: "hsl(228,39%,23%)",
        darkGrayishBlue: "hsl(227,12%,61%)",
        veryDarkBlue: "hsl(223,12%,13%)",
        veryPaledRed: "hsl(13,100%,96%)",
        veryLightGray: "hsl(0,0%,98%)",
        githubColor: "#171515",
        linkedinColor: "#0e76a8",
        ghLighter: "#383333",
        liLighter: "#1293d2"
      }
    },
  },
  plugins: [],
}