import React from 'react';
import PropTypes from "prop-types";
import formatNumber from "../../utils/formatNumber";
import convertDecimalToPercentage from "../../utils/convertDecimalToPercentage";

const TaxResultTier = ({ taxResults }) => {
  const taxResultsTiersHTML = taxResults.map((taxResult) => {
    const taxTier = taxResult.taxTier;
    const taxRate = convertDecimalToPercentage(taxResult.taxRate);
    const taxableAmount = formatNumber(taxResult.taxableAmount);
    const tax = formatNumber(taxResult.tax);

    return (
      <div key={taxTier} className="tax-results__tier">
        <h2>
          <span className="tax-results__label">Tax Tier:</span> 
          <span className="tax-results__value">{taxTier}</span>
        </h2>
        <div className="taxRate">
          <span className="tax-results__label">Tax Rate:</span> 
          <span className="tax-results__value">{taxRate}%</span>
        </div>
        <div className="tax-results__taxableAmount">
          <span className="tax-results__label">Taxed Amount:</span> 
          <span className="tax-results__value">{taxableAmount}</span>
        </div>
        <div className="tax">
          <span className="tax-results__label">Tax:</span> 
          <span className="tax-results__value">{tax}</span>
        </div>
      </div>
    )
  })

  return (
    <>
      {taxResultsTiersHTML}
    </>
  )
}
TaxResultTier.propTypes = {
  taxResults: PropTypes.array.isRequired
};
export default TaxResultTier;

/**
 TODO:
  - Break the <div>'s down into a seperate presentational component? similar to the Input.jsx, and map through it?
 */