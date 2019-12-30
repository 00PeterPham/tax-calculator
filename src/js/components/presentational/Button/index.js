import React from "react";

const Button = ({ className, text, goBack }) => (
  <button className={className} onClick={goBack} >{text}</button>
);

export default Button;
