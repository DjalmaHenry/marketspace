import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    blue: {
      700: '#364D9D',
      500: '#647AC7',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: '#FFFFFF',
    red: {
      500: '#EE7979'
    }
  },
  fonts: {
    heading: 'Karla_700Bold',
    body: 'Karla_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  },
  sizes: {
    14: 56,
    33: 148
  }
})