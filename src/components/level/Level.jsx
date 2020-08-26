import React, { useContext } from 'react';
import {
  Row, Col, Container,
} from 'react-bootstrap';
import Context from '../context/Context';

const Level = () => {
  const typesOfBirds = [
    'Разминка',
    'Растительноядные',
    'Насекомоядные',
    'Хищники',
    'Падальщики',
    'Всеядные',
  ];

  const { currentLevel } = useContext(Context);

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

export default Level;
