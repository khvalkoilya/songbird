import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import play from '../../assets/images/play.svg';
import pause from '../../assets/images/pause.svg';
import speaker from '../../assets/images/speaker.svg';
import mute from '../../assets/images/mute.svg';

const Player = ({ isBig, audioSrc }) => {
  const type = isBig ? 'huge' : 'small';
  return (
    <AudioPlayer
      src={audioSrc}
      autoPlay={false}
      onVolumeChange={(e)=>console.log(e.target)}
      showJumpControls={false}
      customAdditionalControls={[]}
      customIcons={{
        play: <img src={play} className={`play-button-${type}`} alt="play" />,
        pause: <img src={pause} className={`pause-button-${type}`} alt="pause" />,
        volume: <img src={speaker} className={`speaker-button-${type}`} alt="speaker" />,
        volumeMute: <img src={mute} className={`mute-button-${type}`} alt="speaker mute" />,
      }}
    />
  );
};

Player.propTypes = {
  isBig: PropTypes.bool.isRequired,
  audioSrc: PropTypes.string.isRequired,
};

export default Player;
