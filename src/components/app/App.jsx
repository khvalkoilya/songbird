import React, {useState} from 'react';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
import GridMenu from '../gridMenu/GridMenu';
import NextButton from '../nextButton/NextButton';

function App() {
  const [currentLevel, setCurrentLevel] = useState(2);

  return (
    <>
      <Header num={[5]} currentLevel={currentLevel} />
      <CurrentQuestion />
      <GridMenu />
      <NextButton setCurrentLevel={setCurrentLevel} />
    </>
  );
}

export default App;
