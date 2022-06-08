import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: "Open Sans", sans-serif;
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding-left: 0;
  }

  a, a:visited {
    text-decoration: none;
    color: black;
  }

  h1 {
    font-family: "Caveat Brush", cursive;
    margin-bottom: 20px;
  }
  h2 {
    margin: 10px;
    font-size: 1.25em;
  } 
  
  h3 {
    margin: 10px;
    font-size: 1em;
  }

.material-symbols-rounded {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
`;

export default GlobalStyle;
