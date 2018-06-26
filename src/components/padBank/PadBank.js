import React from 'react';
import PadButton from '../padButton/PadButton';
import '../../styles/pad-buttons-styles.css';

const PadBank = ({ handleKeyPress, playSound, updateDisplay, power, currentBankPad }) => {
  let padButtons;

  if(power) {
    padButtons = currentBankPad.map((drumObj, i, padBankArr) => {
    <PadButton
      power={power}
      clip={padBankArr[i].url}
      updateDisplay={updateDisplay}
      keyCode={padBankArr[i].keyCode}
      keyTrigger={padBankArr[i].keyTrigger}
      keyCode={keyCode} clipId={padBankArr[i].id}
      />
    })
  }
  else {
    padButtons = currentBankPad.map((drumObj, i, padBankArr) => {
    <PadButton
      clip="#"
      power={power}
      updateDisplay={updateDisplay}
      keyCode={padBankArr[i].keyCode}
      keyTrigger={padBankArr[i].keyTrigger}
      keyCode={keyCode} clipId={padBankArr[i].id}
      />
    })
  }

  return (
    <div className="pad-buttons-wrapper">
      { padButtons }
    </div>
  );
};

export default PadBank;
