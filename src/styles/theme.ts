export default {
  colors: {
    primary: '#1d4ed8',
    secondary: '#dc2626',
    warning: '#e11d48',
    success: '#16a34a',
    info: '#3b82f6',
    white: '#ffffff',
    black: '#000000',
    background: '#f5f5f5',
    text: '#262626',
  },
  font: {
    family: {
      primary: "'Inter', sans-serif;",
    },
    sizes: {
      xs: '.8rem',
      sm: '1.4rem',
      md: '2.4rem',
      lg: '3.2rem',
      xl: '4rem',
      '2xl': '4.8rem',
      '3xl': '5.6rem',
      '4xl': '6.4rem',
      '5xl': '7.2rem',
      '6xl': '8.0rem',
      '7xl': '9.6rem',
    },
  },
  media: {
    lteOrEqSmallest: '(max-width: 320px)',
    lteOrEqSmall: '(max-width: 576px)',
    lteOrEqMedium: '(max-width: 768px)',
    lteOrEqLarge: '(max-width: 992px)',
    gteOrEqSmallest: '(min-width: 320px)',
    gteOrEqSmall: '(min-width: 576px)',
    gteOrEqMedium: '(min-width: 768px)',
    gteOrEqLarge: '(min-width: 992px)',
  },
  spacings: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
    '2xl': '5rem',
    '3xl': '6rem',
    '4xl': '7rem',
    '5xl': '8rem',
    '6xl': '9rem',
    '7xl': '10rem',
  },
  frameSizes: {
    xs: '8rem',
    sm: '12rem',
    md: '24rem',
    lg: '32rem',
    xl: '40rem',
    '2xl': '56rem',
    '3xl': '64rem',
    '4xl': '80rem',
    '5xl': '104rem',
    '6xl': '120rem',
    '7xl': '134rem',
  },
  transitions: {
    fastest: 'all 100ms ease-in-out',
    faster: 'all 200ms ease-in-out',
    fast: 'all 300ms ease-in-out',
    normal: 'all 500ms ease-in-out',
    slow: 'all 600ms ease-in-out',
    slower: 'all 800ms ease-in-out',
    slowest: 'all 1s ease-in-out',
  },
  layers: {
    normal: 0,
    layer1: 1,
    layer2: 2,
    layer3: 3,
    layer4: 4,
    layer5: 5,
    layer6: 6,
    layer7: 7,
    layer8: 8,
    layer9: 9,
    aboveAll: 10,
  },
} as const;
