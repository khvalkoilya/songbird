import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
} from 'react-bootstrap';

const NextButton = ({
  currentLevel,
  setCurrentLevel,
  readyToChangeLevel,
  setReadyToChangeLevel,
  amountOfLevels,
}) => (
  <Container className="mb-3">
    <button
      type="button"
      className={`next-button ${readyToChangeLevel ? '' : 'next-button-disabled'}`}
      onClick={() => {
        if (currentLevel < amountOfLevels) {
          setCurrentLevel(currentLevel + 1);
          setReadyToChangeLevel(false);
        }
      }}
    >
      Next level
    </button>
  </Container>
);

NextButton.propTypes = {
  currentLevel: PropTypes.number.isRequired,
  setCurrentLevel: PropTypes.func.isRequired,
  readyToChangeLevel: PropTypes.bool.isRequired,
  setReadyToChangeLevel: PropTypes.func.isRequired,
  amountOfLevels: PropTypes.number.isRequired,
};

export default NextButton;
