import React from "react";
import { useHistory } from "react-router-dom";
import calcTotalTax from "./calculators/calcTotalTax";
import taxCalculator from "./calculators/taxCalculator";
import SalaryTitle from '../../components/SalaryTitle';
import TaxResultTier from '../../components/TaxResultTier';
import TotalTax from '../../components/TotalTax';
import Button from '../../components/Button';


const TaxResultsContainer = ({ salary }) => {
  const history = useHistory();
  const taxTiers = [
    {
      tier: 1,
      taxRate: 0.15,
      taxableAmount: 47630,
    },
    {
      tier: 2,
      taxRate: 0.205,
      taxableAmount: 47629,
    },
    {
      tier: 3,
      taxRate: 0.26,
      taxableAmount: 52408,
    },
    {
      tier: 4,
      taxRate: 0.29,
      taxableAmount: 62704,
    },
    {
      tier: 5,
      taxRate: 0.33,
      taxableAmount: null,
    },
  ];
  const taxResults = taxCalculator(salary, taxTiers);
  const totalTax = calcTotalTax(taxResults);
  
  const goBack = () => {
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
