import React, { Component } from 'react';
import '../../styles/pad-buttons-styles.css';
import PadButton from '../padButton/PadButton';

class PadBank extends Component {
  render() {
    let padBank;
    this.props.power ?
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <PadButton
            key={padBankArr[i].id}
            power={this.props.power}
            clip={padBankArr[i].url}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            updateDisplay={this.props.updateDisplay}
          />
        )
      }) :
      padBank = this.props.currentPadBank.map((drumObj, i, padBankArr) => {
        return (
          <PadButton
            clip="#"
            key={padBankArr[i].id}
            power={this.props.power}
            clipId={padBankArr[i].id}
            keyCode={padBankArr[i].keyCode}
            keyTrigger={padBankArr[i].keyTrigger}
            updateDisplay={this.props.updateDisplay}
           />
        )
      });
    return (
      <div className="pad-buttons-wrapper" >
        { padBank }
      </div>
    )
  }
}

export default PadBank;
