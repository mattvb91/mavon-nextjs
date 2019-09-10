import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    body,html {
      font-family: Arial,"Helvetica Neue",Helvetica,sans-serif;
      font-size: 16px;
      margin: 0px;
      height:100%;
  }

  #__next {
      height: 100%;
  }
`

export default GlobalStyle;
