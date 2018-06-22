import React from 'react';
import Button from '../button/Button';
import '../../styles/buttons-styles.css';

const Buttons = ({ onClick }) => {
  return (
    <div className="buttons-wrapper">
      <Button onClick={onClick} className="btn w" value="w"/>
      <Button onClick={onClick} className="btn s" value="s"/>
      <Button onClick={onClick} className="btn a" value="a"/>
      <Button onClick={onClick} className="btn d" value="d"/>
      <Button onClick={onClick} className="btn one" value="1"/>
      <Button onClick={onClick} className="btn two" value="2"/>
      <Button onClick={onClick} className="btn three" value="3"/>
      <Button onClick={onClick} className="btn four" value="4"/>
      <Button onClick={onClick} className="btn space" value="space"/>

      <div className="input-group" id="volume">
        <label htmlFor="volume"> Volume </label>
        <input name="volume" type="range" />
      </div>
      <div className="input-group" id="switch-box">
        <label htmlFor="power"> Power </label>
        <input name="power" type="checkbox" />
      </div>
      <div className="input-group" id="power">
        <label htmlFor="power"> Power </label>
        <input name="power" type="checkbox" />
      </div>
    </div>
  );
};

export default Buttons;
