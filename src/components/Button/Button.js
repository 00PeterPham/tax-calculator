import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, text, onClick }) => (
  <button className={`button ${className}`} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
