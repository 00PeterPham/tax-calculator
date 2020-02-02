import React from "react";
import { useHistory } from "react-router-dom";
import { calcTotalTax, taxCalculator } from "./logic/calculators.js";
import { formatNumber } from "../../utils";
import Button from '../../components/Button';
import TaxBracket from '../../components/TaxBracket';

const TaxResults = ({ salary }) => {
  const history = useHistory();
  const taxBrackets = [
    {
      taxBracket: 1,
      taxRate: 0.15,
      baseAmount: 47630,
    },
    {
      taxBracket: 2,
      taxRate: 0.205,
      baseAmount: 47629,
    },
    {
      taxBracket: 3,
      taxRate: 0.26,
      baseAmount: 52408,
    },
    {
      taxBracket: 4,
      taxRate: 0.29,
      baseAmount: 62704,
    },
    {
      taxBracket: 5,
      taxRate: 0.33,
      baseAmount: null,
    },
  ];
  const taxResults = taxCalculator(salary, taxBrackets);
  const totalTax = calcTotalTax(taxResults);
  
  const goBack = () => {
    history.goBack();
  }

  const renderTaxBrackets = taxResults.map((taxResult) => (
     <TaxBracket key={taxResult.taxBracket} taxResult={taxResult} />
  ));

  return (
    <div className="tax-results"> 
      <h1>Federal Income Tax Rates</h1>
      <div className="tax-results__container">
        <h2>Salary: ${formatNumber(salary)}</h2>
        {renderTaxBrackets}
        <div className="tax-results__total-tax">
          Total Tax: ${formatNumber(totalTax)}
        </div>
        <Button 
          className="tax-results__button" 
          text="Go Back" 
          onClick={goBack}
        />
      </div>
    </div>
  );
}
export default TaxResults;
