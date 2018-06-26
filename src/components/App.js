import React, { Component } from 'react';
import PadBank from './padBank/PadBank';
import PadControls from './padControls/padControls';
import * as banks from './../utils/banks';
import '../styles/app-styles.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      power: true,
      display: String.fromCharCode(160),
      currentPadBank: banks.bankOne,
      bankSelector: true, // if true is active the sounds will be bankOne, else sounds would be sounds of bankTwo
      currentPadBankId: 'Heater Kit',
      sliderVal: 0.3
    };
  }

  handleClick = (e) => {
    alert('OUCH!!');
  }

  handlePowerChange = () => {
    this.setState({
      power: !this.state.power,
    });
  }

  handlePadBankChange = () => {

   if (this.state.power) {
      this.state.currentPadBankId === 'Heater Kit' ?
        this.setState({
          // eslint-disable-next-line
          currentPadBank: banks.bankTwo,
          display: 'Smooth Piano Kit',
          currentPadBankId: 'Smooth Piano Kit',
        }) :
        this.setState({
          // eslint-disable-next-line
          currentPadBank: banks.bankOne,
          display: 'Heater Kit',
          currentPadBankId: 'Heater Kit',
        });
    }
  }

  adjustVolume = e => {
    if (this.state.power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });
      setTimeout(() => this.clearDisplay(), 1000);
    }
  }

  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  render() {
    const { power, currentPadBank, display, sliderVal } = this.state;

    return (
      <div className="app-wrapper" id="drum-machine">
        <PadBank
          power={power}
          playSound={this.playSound}
          currentPadBank={currentPadBank}
          updateDisplay={this.updateDisplay}
          handleKeyPress={this.handleKeyPress}
        />

        <PadControls
          power={power}
          display={display}
          sliderVal={sliderVal}
          currentPadBank={currentPadBank}
          adjustVolume={this.adjustVolume}
          handlePowerChange={this.handlePowerChange}
          handlePadBankChange={this.handlePadBankChange}
        />
      </div>
    );
  }
};

export default App;
