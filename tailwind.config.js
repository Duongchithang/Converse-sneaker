module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {

    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      'extra-bold': 800,
      black: 900,
    },
    fontSize:{
      xs:'12px',
      sm:'14px',
      base:'16px',
      lg:'18px',
      xl:'20px',
      '2xl':'24px',
      '3xl':'30px',
      '4xl':'36px',
      '5xl':'48px',
      '6xl':'60px',
      '7xl':'72px'
    },
    screens: {
      xs:'300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
       'black':'#020202',
       'gray':'#DCDCDC',
       'text':'#7D7D7D',
      'white':'#FFFFFF',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    }
  },
  letterSpacing: {
    tightest: '-.075em',
    tighter: '-.05em',
    tight: '-.025em',
    normal: '0',
    wide: '.025em',
    wider: '.05em',
    widest: '.1em',
    widest: '.25em',
  },
  plugins:[
    require('tw-elements/dist/plugin')
  ]
}

