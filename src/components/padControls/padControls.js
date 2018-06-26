import React from 'react';
import '../../styles/pad-controls-styles.css';

const PadControls = ({ display, handlePowerChange, currentPadBank, power, handlePadBankChange, sliderVal, adjustVolume}) => (
  <React.Fragment>
    <p id="display">
      { display }
    </p>

    <div className="controls-wrapper">
      <div className="control-group" id="power">
        <label htmlFor="power"> Power </label>
        <input name="power" type="checkbox" onChange={handlePowerChange} checked={power} />
      </div>
      <div className="control-group" id="switch-box">
        <label htmlFor="soundFx"> soundFx </label>
        <input name="soundFx" type="checkbox" onChange={handlePadBankChange} />
      </div>
      <div className="control-group" id="volume">
        <label htmlFor="volume"> Volume </label>
        <input type="range" min="0" max="1" step="0.01" value={sliderVal} onChange={adjustVolume} />
       </div>
    </div>
  </React.Fragment>
);

export default PadControls;
