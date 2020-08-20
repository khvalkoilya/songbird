const soundPlayer = (src) => {
  const sound = new Audio(src);
  sound.play();
}

export default soundPlayer;