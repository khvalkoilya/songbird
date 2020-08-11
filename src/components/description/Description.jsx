import React, {useState} from 'react';
import {
  Container, Row, Col
} from 'react-bootstrap';
import image from '../../assets/base.jpg'

const Description = () => {
  return (
    <Container className="description">
      <Row>
        <Col xs={12} lg={6} xl={5}>
          <img 
            src={image}
            className="description-image mt-3"
          />
        </Col>
        <Col xs={12} lg={6} xl={7}>
          <p className="description-name mt-2 mt-lg-3">Птичка</p>
          <hr />
          <p className="description-translation">Bird</p>
          <hr />
          <p className="description-audio">Lfrgrgrg</p>
        </Col>
        <Col xs={12}>
          <p className="description-text">Птичка это очеьн акрп икнпмл мал ка нкгмакгмнкманк мнгки акнгаикн икн акнгаи к иакнгаи книа кни анки</p>
        </Col>
      </Row>
    </Container>
  )
}

export default Description;