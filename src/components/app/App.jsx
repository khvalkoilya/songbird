import React, { useState } from 'react';
import {Context} from '../context/Context';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
import GridMenu from '../gridMenu/GridMenu';
import NextButton from '../nextButton/NextButton';

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(2);
  const [readyToChangeLevel, setReadyToChangeLevel] = useState(true);

  return (
    <Context.Provider value={{
      currentLevel,
      setCurrentLevel,
      score,
      setScore,
      readyToChangeLevel,
      setReadyToChangeLevel,
    }}>
      <Header />
      <CurrentQuestion />
      <GridMenu />
      <NextButton
        currentLevel={currentLevel}
        setCurrentLevel={setCurrentLevel}
        readyToChangeLevel={readyToChangeLevel}
        setReadyToChangeLevel={setReadyToChangeLevel}
        amountOfLevels={6}
      />
    </Context.Provider>
  );
}

export default App;
