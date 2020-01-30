import React from "react";
import PropTypes from "prop-types";
import formatNumber from '../../utils/formatNumber';

const H2 = ({ text, number }) => <h2>{text}: $ {formatNumber(number)}</h2>

H2.propTypes = {
  text: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
}
export default H2 ;
