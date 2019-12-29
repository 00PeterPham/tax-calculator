import React from "react";
import SalaryTitle from '../../presentational/SalaryTitle';
import TaxResultTier from '../../presentational/TaxResultTier';
import TotalTax from '../../presentational/TotalTax';

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
