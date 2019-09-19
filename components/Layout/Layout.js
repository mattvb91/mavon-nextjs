import React from "react";
import GlobalStyle from "../GlobalStyle";
import { Grid } from 'react-styled-flexboxgrid';
import Header from './Header';
import Footer from './Footer'
import styled from 'styled-components';

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
          <Grid>
            {props.children}
          </Grid>
          <Footer />
        </Content>
      </Container>
    </React.Fragment>
  );
}

export default Layout;
