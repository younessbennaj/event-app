import React from 'react';
import Card from './components/Card';
import { Grid, GridItem } from './components/Grid';

function App() {
  return (
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
  );
}

export default App;
