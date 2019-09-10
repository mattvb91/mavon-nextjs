import React from "react";
import GlobalStyle from "../GlobalStyle";
import { Grid } from 'react-styled-flexboxgrid';

function Layout(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Grid style={{ height: '100%'}}>
        {props.children}
      </Grid>
    </React.Fragment>
  );
}

export default Layout;
