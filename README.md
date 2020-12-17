# Event App

## Description 

Réalisation de la page de détail d'un événement. La page de détail d'un évènement permet à un salarié de voir les informations liées à l'évènement (date d'ouverture, nom, nombre de places...) et la liste des participants. Elle lui permet aussi de se s'inscrire et se désinscrire. Par défaut lorsque l'utilisateur s'inscrira à un évènement, il va réserver une place. 

## Features

+ Version desktop et mobile: La page est responsive
+ Afficher le bloc de description avec toutes les informations
+ Afficher la liste de participants
+ Permettre à l'utilisateur de s'inscrire à un évènement, par défaut il commandera seulement une place.
+ Permettre à l'utilisateur de se désinscrire

## Technos

+ ReactJS
+ Axios
+ Styled-Components
+ Typescript 

## Lancer l'application 

### Lancer l'API

```
json-server --watch db.json --port 5000
```

### Lancer le client

```
npm run start
```