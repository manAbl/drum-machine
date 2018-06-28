import React, { Component } from 'react';
import '../../styles/pad-button-styles.css';

const activeStyle = {
  backgroundColor: 'darkturquoise',
  boxShadow: '0 0 20px darkturquoise'
};

const inactiveStyle = {
  backgroundColor: 'transparent',
};

class PadButton  extends Component {
   constructor(props) {
    super(props);
    this.state = {
      padBgColor: inactiveStyle
    };
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  activePad = () => {
    if (this.props.power) {
      this.state.padBgColor.backgroundColor === 'darkturquoise' ?
        this.setState({
          padBgColor: inactiveStyle
        }) :
        this.setState({
          padBgColor: activeStyle
        });
    }
  }

  playSound = e => {
    const { keyTrigger, clipId, updateDisplay } = this.props;

    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activePad();
    setTimeout(() => this.activePad(), 360);

    updateDisplay(clipId.replace(/-/g, ' '));
  }

  handleKeyPress = e => {
    const { keyCode } = this.props;

    if (e.keyCode === keyCode) {
      this.playSound();
    }
  }

  render() {
    const { clip, keyTrigger, playSound, clipId } = this.props;

    return (
      <div className="drum-pad"
        id={clipId}
        onClick={playSound}
        style={this.state.padBgColor}>
        <audio className='clip' id={keyTrigger} src={clip}></audio>
        { keyTrigger }
      </div>
    );
  }
};

export default PadButton;
