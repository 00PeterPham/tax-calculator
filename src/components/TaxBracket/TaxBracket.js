import React from 'react';
import PropTypes from 'prop-types';
import { convertDecimalToPercentage } from './logic/convertDecimalToPercentage';
import { formatNumber } from '../../shared/formatNumber';

const TaxBracket = ({ taxResult }) => {
  const { baseAmount, tax, taxRate, taxBracket } = taxResult;

  return (
    <div key={taxRate} className="tax-results__tax-bracket">
      <h3>
        <span className="tax-results__label">Tax Bracket:</span>
        <span className="tax-results__value">{taxBracket}</span>
      </h3>
      <div className="taxRate">
        <span className="tax-results__label">Tax Rate:</span>
        <span className="tax-results__value">{convertDecimalToPercentage(taxRate)}%</span>
      </div>
      <div className="tax-results__baseAmount">
        <span className="tax-results__label">Base Amount:</span>
        <span className="tax-results__value">{formatNumber(baseAmount)}</span>
      </div>
      <div className="tax">
        <span className="tax-results__label">Tax:</span>
        <span className="tax-results__value">{formatNumber(tax)}</span>
      </div>
    </div>
  );
};
TaxBracket.propTypes = {
  taxResult: PropTypes.object.isRequired,
};
export default TaxBracket;
