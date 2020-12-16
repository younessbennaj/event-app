import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import { Grid, GridItem } from './components/Grid';
import { theme } from './theme';

// Theme Provider Component
const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = { children: PropTypes.node.isRequired };

function App() {
  return (
    <Theme>
      <Grid>
        <GridItem span="2">
          <Card>Card 1</Card>
        </GridItem>
        <GridItem>
          <Card>Card 2</Card>
        </GridItem>
        <GridItem span="2">
          <Card>Card 3</Card>
        </GridItem>
      </Grid>
    </Theme>
  );
}

export default App;
