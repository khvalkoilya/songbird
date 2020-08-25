import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'react-bootstrap';
import Context from '../context/Context';
import random from '../../utils/getNumberFrom1To6';

const NextButton = ({
  amountOfLevels, setIsFinished,
}) => {
  const {
    currentLevel,
    setCurrentLevel,
    readyToChangeLevel,
    setReadyToChangeLevel,
    setDefaultDescriptionOfBird,
    setTrueNumberOfBird,
  } = useContext(Context);
  return (
    <Container className="mb-3">
      <button
        type="button"
        className={`next-button ${readyToChangeLevel ? '' : 'next-button-disabled'}`}
        onClick={() => {
          if (currentLevel + 1 < amountOfLevels) {
            setCurrentLevel(currentLevel + 1);
            setReadyToChangeLevel(false);
            setDefaultDescriptionOfBird(true);
            setTrueNumberOfBird(random());
          } else {
            setIsFinished(true);
          }
        }}
      >
        Next level
      </button>
    </Container>
  );
};

NextButton.propTypes = {
  amountOfLevels: PropTypes.number.isRequired,
  setIsFinished: PropTypes.func.isRequired,
};

export default NextButton;
