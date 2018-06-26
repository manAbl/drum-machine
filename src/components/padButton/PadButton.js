import React, { Component } from 'react';
import '../../styles/pad-button-styles.css';

class PadButton  extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
  const { keyCode } = this.props;

    if (e.keyCode === keyCode) {
      this.playSound();
    }
  }

  playSound = e => {
    const { keyTrigger, clipId, updateDisplay } = this.props;

    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();

    updateDisplay(clipId.replace(/-/g, ' '));
  }

  render() {
    const { clip, keyTrigger, playSound, clipId } = this.props;

    return (
      <button className="drum-pad"
        id={clipId}
        onClick={playSound}>
        <audio className='clip' id={keyTrigger} src={clip}></audio>
        { keyTrigger }
      </button>
    );
  }
};

export default PadButton;
