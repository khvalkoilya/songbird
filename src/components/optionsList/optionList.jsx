import React, {useContext, useState} from 'react';
import {
  ListGroup,
} from 'react-bootstrap';
import birdsData from '../../utils/birdsTest';
import {Context} from '../context/Context';

const OptionList = () => {
  const {currentLevel, setCurrentNumberOfBird, setScore, score, trueNumberOfBird, setDefaultDescriptionOfBird} = useContext(Context);
  console.log(trueNumberOfBird)
  const [localScore, setLocalScore] = useState(5);
  const [arrayWithTheSelected, setArrayWithTheSelected] = useState([0,1,2,3,4,5]);
  console.log(arrayWithTheSelected);
  return (
    <ListGroup variant="flush" className="options">
      {birdsData[currentLevel].map((item) => (
        <ListGroup.Item key={item.id} onClick={
          ()=>{
            setDefaultDescriptionOfBird(false);
            setCurrentNumberOfBird(item.id - 1);
            if(localScore >= 0) {
              if (item.id - 1 === trueNumberOfBird) {
                setScore(localScore + score);
              } else if(arrayWithTheSelected.some((elem) => elem === item.id - 1)) {
                setLocalScore(localScore - 1);
                setArrayWithTheSelected(arrayWithTheSelected.filter((el) => el !== item.id - 1))
              }
            }
          }
        }>
          <span className="options-dot" />
          <span className="options-text">{item.name}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default OptionList;
