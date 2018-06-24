import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button-styles.css';

const Button = ({ value, onClick, className, onKeyPress }) => {
  return (
    <button className={className}
      onClick={onClick} onKeyPress={onKeyPress}>
      {value}
    </button>
  );
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onKeyPress: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

export default Button;
