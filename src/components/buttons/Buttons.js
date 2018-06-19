import React from 'react';
import Button from '../button/Button';
import '../../styles/buttons-styles.css';

const Buttons = ({ onClick }) => {
  return (
    <div className="buttons-wrapper">
      <Button onClick={onClick} className="btn" value="w"/>
      <Button onClick={onClick} className="btn" value="s"/>
      <Button onClick={onClick} className="btn" value="a"/>
      <Button onClick={onClick} className="btn" value="d"/>
      <div className="input-group">
        <label htmlFor="volume"> Volume </label>
        <input name="volume" type="radio" />
      </div>
      <div className="input-group">
        <label htmlFor="power"> Power </label>
        <input name="power" type="checkbox" />
      </div>
    </div>
  );
};

export default Buttons;
