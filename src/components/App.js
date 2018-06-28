import React, { Component } from 'react';
import PadBank from './padBank/PadBank';
import PadControls from './padControls/padControls';
import '../styles/app-styles.css';
import * as banks from './../utils/banks';

class App extends Component {
  constructor() {
    super();
    this.state = {
      power: true,
      sliderVal: 0.3,
      currentPadBank: banks.bankOne,
      currentPadBankId: 'Heater Kit',
      display: String.fromCharCode(160)
    };
  }

  handlePowerChange = () => {
    this.setState({
      power: !this.state.power,
    });
  }

  handlePadBankChange = () => {
    const { power, currentPadBankId } = this.state;

   if (power) {
      currentPadBankId === 'Heater Kit' ?
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

  clearDisplay = () => {
    this.setState({
      display: String.fromCharCode(160)
    });
  }

  adjustVolume = e => {
    const { power } = this.state;
    if (power) {
      this.setState({
        sliderVal: e.target.value,
        display: "Volume: " + Math.round(e.target.value * 100)
      });

      setTimeout(() => this.clearDisplay(), 1200);
    }
  }

  displayUpdater = name  => {
    const { power } = this.state;

    if (power) {
      this.setState({
        display: name
      });
    }
  }

  render() {
    const { power, currentPadBank, display, sliderVal } = this.state;

    return (
      <div className="app-wrapper" id="drum-machine">
        <PadBank
          power={power}
          playSound={this.playSound}
          currentPadBank={currentPadBank}
          updateDisplay={this.displayUpdater}
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
