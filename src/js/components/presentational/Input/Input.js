import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, text, type, name }) => (
  <>
    <label className="salary-form__label" htmlFor={label}>{text}</label>
    <div className="salary-form__input-wrapper">
      {"$"}
      <input
        type={type}
        className="salary-form__input"
        name={name}
        required
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
