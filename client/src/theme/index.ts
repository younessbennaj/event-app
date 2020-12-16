import { ThemeProvider, DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#079CEE',
    lightPrimary: '#EBF7FF',
    success: '#567F0A',
    danger: '#F5222D',
  },
  mediaQueries: {
    small: 'only screen and (max-width: 450px)',
    medium: 'only screen and (min-width: 768px)',
    large: 'only screen and (min-width: 1024)',
    larger: 'only screen and (min-width: 1440)',
  },
};
