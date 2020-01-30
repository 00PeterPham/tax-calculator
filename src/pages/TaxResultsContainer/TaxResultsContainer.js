import React from "react";
import { useHistory } from "react-router-dom";
import calcTotalTax from "./calculators/calcTotalTax";
import taxCalculator from "./calculators/taxCalculator";
import SalaryTitle from '../../components/SalaryTitle';
import TaxResultTier from '../../components/TaxResultTier';
import TotalTax from '../../components/TotalTax';
import Button from '../../components/Button';


const TaxResultsContainer = ({ salary, taxTiers, clearTaxResults }) => {
  const history = useHistory();
  const taxResults = taxCalculator(salary, taxTiers);
  const totalTax = calcTotalTax(taxResults);

  const goBack = () => {
    clearTaxResults();
    history.goBack();
  }

  return (
    <div className="tax-results"> 
      <SalaryTitle salary={salary} />
      <TaxResultTier taxResults={taxResults} />
      <TotalTax totalTax={totalTax} />
      <Button 
        className="tax-results__button" 
        text="Go Back" 
        onClick={goBack}
      />
    </div>
  );
}
export default TaxResultsContainer;
