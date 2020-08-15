import React, {useContext} from 'react';
import {
  ListGroup,
} from 'react-bootstrap';
import birdsData from '../../utils/birdsTest';
import {Context} from '../context/Context';

const OptionList = () => {
  // const birds = [
  //   'Воробей',
  //   'Грач',
  //   'Галка',
  //   'Певчий дрозд',
  //   'Сорока',
  //   'Сойка',
  // ];
  const {currentLevel, setCurrentNumberOfBird} = useContext(Context);

  return (
    <ListGroup variant="flush" className="options">
      {birdsData[currentLevel].map((item) => (
        <ListGroup.Item key={item.id} onClick={
          ()=>setCurrentNumberOfBird(item.id - 1)
        }>
          <span className="options-dot" />
          <span className="options-text">{item.name}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default OptionList;
