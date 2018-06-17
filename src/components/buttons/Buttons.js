import React from 'react';
import Button from './button/Button';

const Buttons = ({ onClick }) => {
  return (
    <div className="buttons-wrapper">
      <Button onClick={onClick} className="btn" value="w"/>
      <Button onClick={onClick} className="btn" value="s"/>
      <Button onClick={onClick} className="btn" value="a"/>
      <Button onClick={onClick} className="btn" value="d"/>
    </div>
  );
};

export default Buttons;
