import React from 'react';
import {
  ListGroup
} from 'react-bootstrap';

const OptionList = () => {
  const birds = [
    'Воробей',
    'Грач',
    'Галка',
    'Певчий дрозд',
    'Сорока',
    'Сойка',
  ]
  return (
    <ListGroup variant="flush" className="options">
      {birds.map((item)=>(
        <ListGroup.Item key={item}>
          <span className="options-dot options-dot-true"></span>
          <span className="options-text">{item}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default OptionList;