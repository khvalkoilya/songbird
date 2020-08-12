import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col, Container,
} from 'react-bootstrap';

const Level = ({ currentLevel }) => {
  const typesOfBirds = [
    'Разминка',
    'Воробьиные',
    'Лесные',
    'Певчие',
    'Хищные',
    'Морские',
  ];

  return (
    <Container>

      <Row className="justify-content-md-center level__container">
        {typesOfBirds.map((item) => (
          <Col
            key={item}
            xs={12}
            sm={6}
            md={3}
            lg={2}
            className={`level my-1 ${typesOfBirds[currentLevel] === item ? 'level__active' : ''}`}
          >
            {item}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Level.propTypes = {
  currentLevel: PropTypes.number.isRequired,
};

export default Level;
