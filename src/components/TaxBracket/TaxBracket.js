import React from 'react';
import PropTypes from 'prop-types';
import { formatNumber } from '../../utils';

const convertDecimalToPercentage = num => {
  return Math.round(num * 100 * 10) / 10;
};

const TaxBracket = ({ taxResult }) => {
  const taxBracket = taxResult.taxBracket;
  const taxRate = convertDecimalToPercentage(taxResult.taxRate);
  const baseAmount = formatNumber(taxResult.baseAmount);
  const tax = formatNumber(taxResult.tax);

  return (
    <div key={taxRate} className="tax-results__tax-bracket">
      <h3>
        <span className="tax-results__label">Tax Bracket:</span>
        <span className="tax-results__value">{taxBracket}</span>
      </h3>
      <div className="taxRate">
        <span className="tax-results__label">Tax Rate:</span>
        <span className="tax-results__value">{taxRate}%</span>
      </div>
      <div className="tax-results__baseAmount">
        <span className="tax-results__label">Base Amount:</span>
        <span className="tax-results__value">{baseAmount}</span>
      </div>
      <div className="tax">
        <span className="tax-results__label">Tax:</span>
        <span className="tax-results__value">{tax}</span>
      </div>
    </div>
  );
};
TaxBracket.propTypes = {
  taxResult: PropTypes.object.isRequired,
};
export default TaxBracket;
