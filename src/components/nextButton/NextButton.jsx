import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'react-bootstrap';
import {Context} from '../context/Context';

const NextButton = ({
  amountOfLevels,
}) => {
  const {
    currentLevel,
    setCurrentLevel,
    readyToChangeLevel,
    setReadyToChangeLevel,
    setDefaultDescriptionOfBird,
  } = useContext(Context);
  return (
    <Container className="mb-3">
      <button
        type="button"
        className={`next-button ${readyToChangeLevel ? '' : 'next-button-disabled'}`}
        onClick={() => {
          if (currentLevel + 1< amountOfLevels) {
            setCurrentLevel(currentLevel + 1);
            setReadyToChangeLevel(false);
            setDefaultDescriptionOfBird(true);
          }
        }}
      >
        Next level
      </button>
    </Container>
  )
};

NextButton.propTypes = {
  amountOfLevels: PropTypes.number.isRequired,
};

export default NextButton;
