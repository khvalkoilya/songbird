import React, {useContext} from 'react';
import {
  Container,
} from 'react-bootstrap';
import {Context} from '../context/Context';
import dance from '../../assets/dance.gif';
import random from '../../utils/getNumberFrom1To6';

const FinalBlock = () => {
  const {score, setIsFinished, setScore, setCurrentLevel, setReadyToChangeLevel, setDefaultDescriptionOfBird, setTrueNumberOfBird} = useContext(Context);
  const loserBlock = 
    <>
       <p>Поздравляем с окончанием игры!</p>
       <p>Вы набрали <span className="final-block__bold-text">{score}</span> баллов.</p>
       <p>Из возможных <span className="final-block__bold-text">30</span>.</p>
       <button 
        className="final-block__button" 
        onClick={()=>{
          setIsFinished(false);
          setScore(0);
          setCurrentLevel(0);
          setReadyToChangeLevel(false);
          setDefaultDescriptionOfBird(true);
          setTrueNumberOfBird(random());
        }}
       >Еще раз</button>
    </>;
  const winnerBlock = 
    <>
      <p className="final-block__bold-text">Поздравляем!</p>
      <p>Вы победили! Игра окончена.</p>
      <img
        src={dance}
        className="final-block__gif"
      />
    </>;
  return (
    <Container>
      <div className='final-block'>
        {score === 30 ? winnerBlock : loserBlock}
      </div>
    </Container>
  )
}

export default FinalBlock;