import React from "react";
import PropTypes from "prop-types";
import formatNumber from '../../utils/formatNumber';

const TotalTax = ({ totalTax }) => {
  totalTax = formatNumber(totalTax);

  return <div className="tax-results__total-tax">Total Tax: $ {totalTax}</div>
}
TotalTax.propTypes = {
  totalTax: PropTypes.number.isRequired,
}
export default TotalTax ;
