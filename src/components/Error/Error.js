import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ className, text }) => <div className={`error-msg ${className}`}>{text}</div>;

Error.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Error;
