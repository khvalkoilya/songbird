import React from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';

const Level = () => {
  const typesOfBirds = [
    'Разминка',
    'Воробьиные',
    'Лесные',
    'Певчие',
    'Хищные',
    'Морские',
  ];

  const active = 'Певчие';

  return (
    <Container>

    <Row className="justify-content-md-center level__container">
      {typesOfBirds.map((item) => (
        <Col key={item} xs={12} sm={6} md={3} lg={2} 
          className={`level my-1 ${active === item ? 'level__active' : ''}`}
        >
          {item}
        </Col>
      ))}
    </Row>
    </Container>
  );
};

export default Level;
