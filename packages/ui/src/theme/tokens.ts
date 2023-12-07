import {
    greenDark,
    orange,
    orangeDark,
  } from '@tamagui/colors'

  // To demonstrate how to us our own color palettes 
  const green = {
    green1: 'hsl(136, 50.0%, 98.9%)',
    green2: 'hsl(138, 62.5%, 96.9%)',
    green3: 'hsl(139, 55.2%, 94.5%)',
    green4: 'hsl(140, 48.7%, 91.0%)',
    green5: 'hsl(141, 43.7%, 86.0%)',
    green6: 'hsl(143, 40.3%, 79.0%)',
    green7: 'hsl(146, 38.5%, 69.0%)',
    green8: 'hsl(151, 40.2%, 54.1%)',
    green9: 'hsl(151, 55.0%, 41.5%)',
    green10: 'hsl(152, 57.5%, 37.6%)',
    green11: 'hsl(153, 67.0%, 28.5%)',
    green12: 'hsl(155, 40.0%, 14.0%)',
  }
  
  export const colorTokens = {
    light: {
      green: green,
      orange: orange,
    },
    dark: {
      green: greenDark,
      orange: orangeDark,
    },
  }