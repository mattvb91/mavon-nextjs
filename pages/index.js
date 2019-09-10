import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

const CenterCol = styled(Col)`
  font-size: 20px;
  color: #B0BEC5;
  font-weight: 10;
`;

const Home = () => (
  <Row style={{ height: '100%' }} center="xs" middle="xs">
    <CenterCol>
      Be right back.
    </CenterCol>
  </Row>
)

export default Home
