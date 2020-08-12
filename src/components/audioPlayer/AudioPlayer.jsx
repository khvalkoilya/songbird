import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import imageDefault from '../../assets/base.jpg';

const Player = () => (
  <AudioPlayer
    src='https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
    onPlay={e => console.log("onPlay")}
    showJumpControls={false}
    customAdditionalControls={[]}
    // customIcons={{
    //   play: imageDefault,
    //   pause: imageDefault,
    //   forward: imageDefault,
    // }}
  />
);

export default Player;