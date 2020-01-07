import React from "react";

const Button = ({ className, text, onClick }) => (
  <a className={`button ${className}`} onClick={onClick} >{text}</a>
);

export default Button;
