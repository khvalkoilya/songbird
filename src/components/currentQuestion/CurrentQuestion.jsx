import React from 'react';
import {
  Row, Col,
} from 'react-bootstrap';

const CurrentQuestion = () => {
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
    <Row className="justify-content-md-center current-question__container mt-3">
      {typesOfBirds.map((item) => (
        <Col key={item} xs={12} sm={6} md={3} lg={2} 
          className={`current-question my-1 ${active === item ? 'current-question__active' : ''}`}
        >
          {item}
        </Col>
      ))}
    </Row>
  );
};

export default CurrentQuestion;
