import React from "react";
import PropTypes from "prop-types";
import formatNumber from '../../../utils/formatNumber';
import calcTotalTax from '../../../utils/calcTotalTax';

const TotalTax = ({ taxResults }) => {
  const totalTax = taxResults[0] ? formatNumber(calcTotalTax(taxResults)) : null;

  return <div className="tax-results__total-tax">Total Tax: $ {totalTax}</div>
}
TotalTax.propTypes = {
  taxResults: PropTypes.array.isRequired,
}
export default TotalTax ;

/**
 TODO:
 - Figure out how to set default props
 */
