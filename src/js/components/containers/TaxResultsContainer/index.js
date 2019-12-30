import React from "react";
import SalaryTitle from '../../presentational/SalaryTitle';
import TaxResultTier from '../../presentational/TaxResultTier';
import TotalTax from '../../presentational/TotalTax';
import Button from '../../presentational/Button';

const TaxResultsContainer = ({ salary, taxResults, goBack }) => {
  return (
    <div className="tax-results"> 
      <SalaryTitle salary={salary} />
      <TaxResultTier taxResults={taxResults} />
      <TotalTax taxResults={taxResults} />
      <Button 
        className="tax-results__button" 
        text="Go Back" 
        goBack={goBack}
      />
    </div>
  );
}
export default TaxResultsContainer;
