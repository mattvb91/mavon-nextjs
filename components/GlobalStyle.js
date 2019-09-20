import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    body,html {
      font-family:'Open Sans',Sans-serif;
      font-size: 16px;
      line-height: 20px;
      margin: 0px;
      height:100%;
  }

  #__next {
      height: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    color: grey;
  }

  a:visited {
    color: grey;
  }

  b {
    font-weight: bold;
  }

  h2 {
    padding-top: 5px;
  }

`

export default GlobalStyle;
