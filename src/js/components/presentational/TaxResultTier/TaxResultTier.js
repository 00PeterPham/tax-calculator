import React from 'react';
import PropTypes from "prop-types";
import formatNumber from "../../_common/utils/formatNumber";
import convertDecimalToPercentage from "../../_common/utils/convertDecimalToPercentage";

const TaxResultTier = ({ taxResults }) => {
  const taxResultsTiersHTML = taxResults.map((taxResult) => {
    const taxTier = taxResult.taxTier;
    const taxRate = convertDecimalToPercentage(taxResult.taxRate);
    const taxableAmount = formatNumber(taxResult.taxableAmount);
    const tax = formatNumber(taxResult.tax);

    return (
      <div key={taxTier} className="tax-results__tier">
        <h2>
          <span>Tax Tier:</span> 
          {taxTier}
        </h2>
        <div className="taxRate">
          <span>Tax Rate:</span> 
          {taxRate}%
        </div>
        <div className="tax-results__taxableAmount">
          <span>Taxed Amount:</span> 
          {taxableAmount}
        </div>
        <div className="tax">
          <span>Tax:</span> 
          {tax}
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