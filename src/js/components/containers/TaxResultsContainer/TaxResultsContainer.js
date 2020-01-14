import React from "react";
import { useHistory } from "react-router-dom";
import SalaryTitle from '../../presentational/SalaryTitle';
import TaxResultTier from '../../presentational/TaxResultTier';
import TotalTax from '../../presentational/TotalTax';
import Button from '../../presentational/Button';

const TaxResultsContainer = ({ salary, taxResults, resetSalary_TaxTiers }) => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  }
  return (
    <div className="tax-results"> 
      <SalaryTitle salary={salary} />
      <TaxResultTier taxResults={taxResults} />
      <TotalTax taxResults={taxResults} />
      <Button 
        className="tax-results__button" 
        text="Go Back" 
        onClick={goBack}
      />
    </div>
  );
}
export default TaxResultsContainer;
