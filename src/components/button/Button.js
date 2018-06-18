import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/button-styles.css';

const Button = ({ value, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>{value}</button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
