import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import EventCard from './components/EventCard';
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
          <EventCard
            imageUrl="https://veganfoodandliving-1321f.kxcdn.com/wp-content/uploads/2018/09/High-Protein-Vegan-Burgers.jpg"
            date={{ month: 'FEV', day: '5' }}
            title="Team building - Cooking Party Challenge"
            body="Transformez votre équipe en une véritable brigade de cuisinier et plongez vous dans l'atmosphère d'un véritable restaurant ! Vous devrez imaginer et concevoir votre repas à partir d'un panier d'ingrédients surprise, le tout sans recette ! Des équipes sont constituées, chacune d'elle aura la responsabilité de créer une entrée, un plat ou un dessert. La première phase de l'animation Cooking Party Challenge est dédiée à la réflexion : écriture des recettes, répartition des tâches, organisation du dressage, décoration des assiettes... Après la validation de l'un de nos chefs de cuisine professionnel, place à la réalisation ! Nos chefs animateurs encadrent et accompagnent les marmitons, en veillant à la bonne humeur et la convivialité! Vous profitez ensuite tous ensemble du fruit de votre travail autour d'un bon repas. Prêt pour le Cooking Party Challenge ?"
            startAt="19:00"
            endAt="22:30"
            remainingTickets="32"
            closingDate="2 janvier 2021"
          />
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
