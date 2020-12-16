import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: '#079CEE',
    lightPrimary: '#EBF7FF',
    success: '#567F0A',
    danger: '#F5222D'
  },
  mediaQueries: {
    small: 'only screen and (max-width: 450px)',
    medium: 'only screen and (max-width: 1200px)',
    large: 'only screen and (max-width: 1440)',
    larger: 'only screen and (max-width: 1600)'
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;