import React, { Component } from 'react';
import Buttons from './buttons/Buttons';
import '../styles/app-styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fase: true,
      power: true
    };
  }

  handleChange = (e) => {
    const checkboxSelected = e.target.name;

    if(checkboxSelected === 'power') {
      this.setState({
        power: !this.state.power
      });
    }

    else if(checkboxSelected === 'soundFx') {
      this.setState({
        fase: !this.state.fase
      });
    }
  }

  handleClick = (e) => {
    alert('OUCH!!');
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  playSound(e) {
    const sound = document.getElementById(this.props.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    this.activatePad();
    setTimeout(() => this.activatePad(), 100);
    this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
  }

  handleKeyPress = (e) => {

  /*

  if (e.keyCode === this.props.keyCode) {
      this.playSound();
    }

  */

    if(e.key == 'w') {
      console.log('Presionaste ' + e.key);
    }

    else if(e.key == 'A') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'S') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'D') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'Space') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowUp') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowDown') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowLeft') {
      alert(' Presionaste ' + e.key);
    }

    else if(e.key == 'ArrowRight') {
      alert(' Presionaste ' + e.key);
    }

    return;
  }

  render() {
    return (
      <div className="app-wrapper">
        <Buttons onClick={this.handleClick} powerSwitch={this.state.power}
          onKeyPress={this.handleKeyPress} fase={this.state.fase} handleChange={this.handleChange} />
      </div>
    );
  }
};

export default App;


// <audio className='clip' id={this.props.keyTrigger} src={this.props.clip}></audio> ;
