import React from "react";

const Button = ({ className, text, goBack }) => (
  <button className={`button ${className}`} onClick={goBack} >{text}</button>
);

export default Button;
