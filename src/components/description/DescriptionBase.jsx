import React from 'react';
import PropTypes from 'prop-types';
import {
  Row, Col,
} from 'react-bootstrap';
import Player from '../audioPlayer/AudioPlayer';

const DescriptionBase = ({
  name, translation, image, description, audio,
}) => {
  const audioElement = <Player isBig={false} audioSrc={audio} />;
  return (
    <Row>
      <Col xs={12} lg={6} xl={5}>
        <img
          src={image}
          className="description-image mt-3"
          alt="bird"
        />
      </Col>
      <Col xs={12} lg={6} xl={7}>
        <p className="description-name mt-2 mt-lg-3">{name}</p>
        <hr />
        <p className="description-translation">{translation}</p>
        <hr />
        <div className="description-audio">{audioElement}</div>
      </Col>
      <Col xs={12}>
        <p className="description-text">{description}</p>
      </Col>
    </Row>
  );
};

DescriptionBase.propTypes = {
  name: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  audio: PropTypes.string.isRequired,
};

export default DescriptionBase;
