import React, {useContext, useState} from 'react';
import {
  ListGroup,
} from 'react-bootstrap';
import birdsData from '../../utils/birdsTest';
import {Context} from '../context/Context';

const OptionList = () => {
  const {
    currentLevel, 
    setCurrentNumberOfBird, 
    setScore, 
    score, 
    trueNumberOfBird, 
    setDefaultDescriptionOfBird,
    readyToChangeLevel,
    setReadyToChangeLevel,
  } = useContext(Context);
  console.log(trueNumberOfBird)
  const [localScore, setLocalScore] = useState(5);
  const [arrayWithTheSelected, setArrayWithTheSelected] = useState([0,1,2,3,4,5]);

  return (
    <ListGroup variant="flush" className="options">
      {birdsData[currentLevel].map((item) => (
        <ListGroup.Item key={item.id+item.name} 
          onClick={
            ()=>{
              setDefaultDescriptionOfBird(false);
              setCurrentNumberOfBird(item.id - 1);
              const dot = document.querySelectorAll('.options-dot')[item.id-1];
              if(localScore >= 0 && !readyToChangeLevel) {
                if (item.id - 1 === trueNumberOfBird) {
                  setReadyToChangeLevel(true);
                  setScore(localScore + score);
                  setLocalScore(5);
                  setArrayWithTheSelected([0,1,2,3,4,5]);
                  dot.classList.add('options-dot-true')
                } else if(arrayWithTheSelected.some((elem) => elem === item.id - 1)) {
                  setLocalScore(localScore - 1);
                  setArrayWithTheSelected(arrayWithTheSelected.filter((el) => el !== item.id - 1));
                  dot.classList.add('options-dot-false')
                }
              }
            }
          }
        >
          <span className="options-dot" />
          <span className="options-text">{item.name}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default OptionList;
