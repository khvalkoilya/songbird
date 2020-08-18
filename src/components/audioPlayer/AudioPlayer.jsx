import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import speaker from '../../assets/speaker.svg'
import mute from '../../assets/mute.svg'

const Player = ({isBig, audioSrc}) => {
  const type = isBig ? 'huge' : 'small'
  return (
    <AudioPlayer
      src={audioSrc}
      onPlay={e => console.log("onPlay")}
      showJumpControls={false}
      customAdditionalControls={[]}
      customIcons={{
        play: <img src={play} className={`play-button-${type}`} alt="play" />,
        pause: <img src={pause} className={`pause-button-${type}`} alt="pause" />,
        volume: <img src={speaker} className={`speaker-button-${type}`} alt="speaker" />,
        volumeMute: <img src={mute} className={`mute-button-${type}`} alt="speaker mute" />,
      }}
    />
  )
};

export default Player;