import React from "react";
import PropTypes from "prop-types";

const Input = ({ text, type, name, handleInputFocus  }) => (
  <>
    <label className="salary-form__label" htmlFor={name}>{text}</label>
    <div className="salary-form__input-wrapper">
      <span className="salary-form__symbol">$</span>
      <input
        type={type}
        className="salary-form__input"
        id={name}
        onFocus={handleInputFocus}
      />
    </div>
  </>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Input;
