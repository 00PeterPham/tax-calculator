import React from "react";
import PropTypes from "prop-types";

const Input = ({ label, text, type, name }) => (
  <>
    <label htmlFor={label}>{text}</label>
    <div>
      {"$"}
      <input
        type={type}
        className="salary-input"
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
