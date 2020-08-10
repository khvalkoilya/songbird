import React from 'react';
import Header from '../header/Header';
import CurrentQuestion from '../currentQuestion/CurrentQuestion';

function App() {
  return (
    <>
      <Header num={[5]} />
      <CurrentQuestion />
    </>
  );
}

export default App;
