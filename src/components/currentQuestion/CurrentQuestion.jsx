import React, { useContext, useEffect } from 'react';
import {
  Container, Row, Col,
} from 'react-bootstrap';
import imageDefault from '../../assets/images/base.png';
import Player from '../audioPlayer/AudioPlayer';
import Context from '../context/Context';
import birdsList from '../../utils/birdsList';

const CurrentQuestion = () => {
  const { readyToChangeLevel, trueNumberOfBird, currentLevel } = useContext(Context);
  const defaultName = '******';
  const data = birdsList[currentLevel][trueNumberOfBird];
  useEffect(() => {
    if (!readyToChangeLevel) {
      console.log(`Правильный ответ - ${data.name}`);
    }
    document.querySelector('audio').pause();
  }, [readyToChangeLevel]);
  return (
    <Container className="mt-3">
      <Row className="justify-content-between current-block my-3">
        <Col xs={12} md={3} lg={2}>
          <img
            src={readyToChangeLevel ? data.image : imageDefault}
            className="current-image my-3"
            alt="bird"
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="my-3">
          <p className="current-name">{readyToChangeLevel ? data.name : defaultName}</p>
          <hr />
          <Player isBig audioSrc={data.audio} />
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentQuestion;
