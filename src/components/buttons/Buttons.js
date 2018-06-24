import React from 'react';
import Button from '../button/Button';
import '../../styles/buttons-styles.css';

const Buttons = ({ onClick, onKeyPress, fase, powerSwitch, handleChange }) => {
  return (
    <div className="buttons-wrapper">
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn w" value="w"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn s" value="s"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn a" value="a"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn d" value="d"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn one" value="1"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn two" value="2"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn three" value="3"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn four" value="4"/>
      <Button onClick={onClick} onKeyPress={onKeyPress} className="btn space" value="space"/>

      <div className="input-group" id="volume">
        <label htmlFor="volume"> Volume </label>
        <input name="volume" type="range" />
      </div>
      <div className="input-group" id="switch-box">
        <label htmlFor="soundFx"> SoundFX </label>
        <input name="soundFx" type="checkbox" onChange={handleChange} checked={fase} />
      </div>
      <div className="input-group" id="power">
        <label htmlFor="power"> Power </label>
        <input name="power" type="checkbox" onChange={handleChange} checked={powerSwitch} />
      </div>
    </div>
  );
};

export default Buttons;
