import React from "react";
import GlobalStyle from "../GlobalStyle";
import { Grid } from 'react-styled-flexboxgrid';
import Header from './Header';
import Footer from './Footer'
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'

const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 0, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76  // rem
    },
    breakpoints: {
      xs: 0,  // em
      sm: 48, // em
      md: 64, // em
      lg: 75  // em
    }
  }
}

const Content = styled.div`
  padding-bottom: 100px;
`

const Container = styled.div`
  position: relative;
  min-height: 100%;
`

function Layout(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Container>
        <Content>
          <ThemeProvider theme={theme}>
            <Grid>
              {props.children}
            </Grid>
          </ThemeProvider>
          <Footer />
        </Content>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
