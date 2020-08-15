import React, { useState } from 'react';
import {Context} from '../context/Context';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
import GridMenu from '../gridMenu/GridMenu';
import NextButton from '../nextButton/NextButton';
import random from '../../utils/getNumberFrom1To6';

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(2);
  const [readyToChangeLevel, setReadyToChangeLevel] = useState(true);
  const [currentNumberOfBird, setCurrentNumberOfBird] = useState(random());

  return (
    <Context.Provider value={{
      currentLevel,
      setCurrentLevel,
      score,
      setScore,
      readyToChangeLevel,
      setReadyToChangeLevel,
      currentNumberOfBird,
      setCurrentNumberOfBird,
    }}>
      <Header />
      <CurrentQuestion />
      <GridMenu />
      <NextButton
        amountOfLevels={6}
      />
    </Context.Provider>
  );
}

export default App;
