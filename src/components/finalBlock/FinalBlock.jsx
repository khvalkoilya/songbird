import React, {useContext} from 'react';
import {
  Container,
} from 'react-bootstrap';
import {Context} from '../context/Context';
import dance from '../../assets/dance.gif';

const FinalBlock = () => {
  const {score} = useContext(Context);
  const loserBlock = 
    <>
       <p>Поздравляем с окончанием игры!</p>
       <p>Вы набрали <span>{score}</span> баллов</p>
       <p>Из возможных <span>30</span>.</p>
    </>;
  const winnerBlock = 
    <>
      <img
        src={dance}
        className="final-block__gif"
      />
    </>;
  return (
    <Container>
      <div className='final-page'>
        {score !== 30 ? winnerBlock : loserBlock}
      </div>
    </Container>
  )
}

export default FinalBlock;