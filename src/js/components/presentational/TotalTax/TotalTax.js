import React from "react";
import PropTypes from "prop-types";
import formatNumber from '../../_lib/formatNumber';
import calcTotalTax from '../../_lib/calcTotalTax';

const TotalTax = ({ taxResults }) => {
  const totalTax = formatNumber(calcTotalTax(taxResults));

  return <div className="tax-results__total-tax">Total Tax: $ {totalTax}</div>
}
TotalTax.propTypes = {
  taxResults: PropTypes.array.isRequired,
}
export default TotalTax ;
