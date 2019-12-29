import React from 'react';
import PropTypes from "prop-types";
import formatNumber from "../../../utils/formatNumber";

const TaxResultTier = ({ taxResults }) => {
  const taxResultsTiersHTML = taxResults.map((taxResult) => {
    const taxTier = taxResult.tier;
    const taxRate = taxResult.taxRate * 100;
    const taxableAmount = formatNumber(taxResult.taxableAmount);
    const tax = formatNumber(taxResult.tax);

    return (
      <div key={taxTier} className="tax-results__tier">
        <h2>Tier: {taxTier}</h2>
        <div className="taxRate">Tax Rate: {taxRate}%</div>
        <div className="tax-results__taxableAmount">Taxed Amount: {taxableAmount}</div>
        <div className="tax">Tax: {tax}</div>
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