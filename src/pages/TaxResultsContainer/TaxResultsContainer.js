import React from "react";
import { useHistory } from "react-router-dom";
import SalaryTitle from '../../components/SalaryTitle';
import TaxResultTier from '../../components/TaxResultTier';
import TotalTax from '../../components/TotalTax';
import Button from '../../components/Button';

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
