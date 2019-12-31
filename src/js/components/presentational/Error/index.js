import React from "react";

const Error = ({ className, text }) => (
  <div className={`error-msg ${className}`}>
    {text}
  </div>
)
export default Error;