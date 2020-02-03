import React from 'react';
import { useHistory } from 'react-router-dom';
import { calcEffectiveTaxRate, calcTotalTax, taxCalculator } from './logic/calculators.js';
import { convertDecimalToPercentage } from '../../shared/convertDecimalToPercentage';
import { formatNumber } from '../../shared/formatNumber';
import Button from '../../components/Button';
import TaxBracket from '../../components/TaxBracket';

const TaxResults = ({ salary }) => {
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
  const effectiveTaxRate = calcEffectiveTaxRate(salary, totalTax);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const renderTaxBrackets = taxResults.map(taxResult => (
    <TaxBracket key={taxResult.taxBracket} taxResult={taxResult} />
  ));

  return (
    <div className="tax-results">
      <h1>Federal Income Tax Rates</h1>
      <div className="tax-results__container">
        <h2>Salary: ${formatNumber(salary)}</h2>
        {renderTaxBrackets}
        <div className="tax-results__total-tax">
          <span className="tax-results__label">Total Tax:</span>
          <span className="tax-results__value">${formatNumber(totalTax)}</span>
        </div>
        <div className="tax-results__effective-tax-rate">
          <span className="tax-results__label">Effective Tax Rate:</span>
          <span className="tax-results__value">
            {convertDecimalToPercentage(effectiveTaxRate)}%
          </span>
        </div>
        <Button className="tax-results__button" text="Go Back" onClick={goBack} />
      </div>
    </div>
  );
};
export default TaxResults;
