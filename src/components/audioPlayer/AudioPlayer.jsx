import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import play from '../../assets/play.svg';
import pause from '../../assets/pause.svg';
import speaker from '../../assets/speaker.svg'
import mute from '../../assets/mute.svg'

const Player = ({isBig}) => {
  const type = isBig ? 'huge' : 'small'
  return (
    <AudioPlayer
      src='https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
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