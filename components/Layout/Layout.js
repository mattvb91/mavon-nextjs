import React from "react";
import GlobalStyle from "../GlobalStyle";
import { Grid } from 'react-styled-flexboxgrid';
import Header from './Header';
import Footer from './Footer'

function Layout(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <Grid style={{ height: '100%' }}>
        {props.children}
        <Footer />
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
