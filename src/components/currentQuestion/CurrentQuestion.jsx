import React from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import image from '../../assets/base.jpg'

const CurrentQuestion = () => {
  return (
    <Container className="mt-3">
      <Row className="justify-content-between current-block my-3">
        <Col xs={12} md={3} lg={2} >
          <img
            src={image}
            className="current-image my-3"
            alt="bird image"
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="my-3">
          <p className="current-name">Птичка</p>
          <hr />
          AUDIO
        </Col>
      </Row>
    </Container>
  )
};

export default CurrentQuestion;
