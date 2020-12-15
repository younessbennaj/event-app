import { createGlobalStyle } from 'styled-components';

//Ici j'initilise le style de base de notre application

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap');
    *,
    *::before,
    * {
        margin: 0;
        padding: 0;
        outline: 0; 
        border: 0;
        box-sizing: inherit;
    }
    
    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }
    
    html {
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.6em;
        color: #262626;
    }
    
    ul {
        list-style: none;
    }
    
    li, a, button {
        text-decoration: none;
    }
    
    button {
        cursor: pointer;
    }
  
`