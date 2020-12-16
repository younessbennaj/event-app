import { ThemeProvider, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    body: '#8C8C8C',
    heading: '#262626',
    primary: '#079CEE',
    lightPrimary: '#EBF7FF',
    success: '#567F0A',
    danger: '#F5222D',
  },
  mediaQueries: {
    small: 'only screen and (min-width: 300px)',
    medium: 'only screen and (min-width: 1000px)',
    large: 'only screen and (min-width: 1440)',
  },
};
