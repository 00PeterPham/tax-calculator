import React from "react";
import { useHistory } from "react-router-dom";
import SalaryTitle from '../../common/components/SalaryTitle';
import TaxResultTier from '../../common/components/TaxResultTier';
import TotalTax from '../../common/components/TotalTax';
import Button from '../../common/components/Button';

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
