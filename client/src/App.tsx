import React from 'react';
import Theme from './styles/theme.js';
import Card from './components/Card';
import { Grid, GridItem } from './components/Grid';

function App() {
  return (
    <Theme>
      <div className="App">
        <h1>Event App</h1>
        <Grid>
          <GridItem span="1">
            <Card>Card 1</Card>
          </GridItem>
          <GridItem>
            <Card>Card 2</Card>
          </GridItem>
          <GridItem>
            <Card>Card 3</Card>
          </GridItem>
        </Grid>
      </div>
    </Theme>
  );
}

export default App;
