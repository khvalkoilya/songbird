import React, { useState } from 'react';
import {Context} from '../context/Context';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
import GridMenu from '../gridMenu/GridMenu';
import NextButton from '../nextButton/NextButton';
import random from '../../utils/getNumberFrom1To6';
import FinalBlock from '../finalBlock/FinalBlock'

function App() {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [score, setScore] = useState(0);
  const [readyToChangeLevel, setReadyToChangeLevel] = useState(false);
  const [currentNumberOfBird, setCurrentNumberOfBird] = useState(0);
  const [trueNumberOfBird, setTrueNumberOfBird] = useState(random());
  const [defaultDescriptionOfBird, setDefaultDescriptionOfBird] = useState(true);
  const [isFinished, setIsFinished] = useState(false);

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
      trueNumberOfBird,
      setTrueNumberOfBird,
      defaultDescriptionOfBird,
      setDefaultDescriptionOfBird,
      setIsFinished,
    }}>
      {
        !isFinished ? 
          <>
            <Header />
            <CurrentQuestion />
            <GridMenu />
            <NextButton
              amountOfLevels={6}
              setIsFinished={setIsFinished}
            />
          </>
          :
          <FinalBlock />
      }
    </Context.Provider>
  );
}

export default App;
