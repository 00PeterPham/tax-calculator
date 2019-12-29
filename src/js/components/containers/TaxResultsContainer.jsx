import React from "react";
import SalaryTitle from '../presentational/SalaryTitle.jsx';
import TaxResultTier from '../presentational/TaxResultTier.jsx';
import TotalTax from '../presentational/TotalTax.jsx';

const TaxResultsContainer = ({ salary, taxResults }) => {
  return (
    <div className="tax-results"> 
      <SalaryTitle salary={salary} />
      <TaxResultTier taxResults={taxResults} />
      <TotalTax taxResults={taxResults} />
    </div>
  );
}
export default TaxResultsContainer;
