import React from 'react';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';
import GridMenu from '../gridMenu/GridMenu';
import NextButton from '../nextButton/NextButton';

function App() {
  return (
    <>
      <Header num={[5]} />
      <CurrentQuestion />
      <GridMenu />
      <NextButton />
    </>
  );
}

export default App;
