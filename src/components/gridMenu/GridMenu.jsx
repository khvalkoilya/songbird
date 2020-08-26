import React from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import OptionList from '../optionsList/OptionList';
import Description from '../description/Description';

const GridMenu = () => (
  <Container className="mt-3">
    <Row>
      <Col xs={12} sm className="mb-3">
        <OptionList />
      </Col>
      <Col xs={12} sm className="mb-3">
        <Description />
      </Col>
    </Row>
  </Container>
);

export default GridMenu;
