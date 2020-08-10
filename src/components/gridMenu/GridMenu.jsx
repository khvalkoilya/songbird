import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import OptionList from '../optionsList/OptionList'

const GridMenu = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col xs={12} sm className="mb-3">
          <OptionList />
        </Col>
        <Col xs={12} sm className="mb-3">
          <OptionList />
        </Col>
      </Row>
    </Container>
  )
}

export default GridMenu;