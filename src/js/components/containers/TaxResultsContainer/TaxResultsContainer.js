import React from "react";
import { useHistory } from "react-router-dom";
import SalaryTitle from '../../presentational/SalaryTitle/SalaryTitle';
import TaxResultTier from '../../presentational/TaxResultTier/TaxResultTier';
import TotalTax from '../../presentational/TotalTax/TotalTax';
import Button from '../../presentational/Button/Button';

const TaxResultsContainer = ({ salary, taxResults }) => {
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
        goBack={goBack}
      />
    </div>
  );
}
export default TaxResultsContainer;
