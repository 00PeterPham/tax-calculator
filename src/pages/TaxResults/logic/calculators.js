export const rndNumUpTwoDecimal = num => {
  return Math.round(num * 100) / 100;
};

export const calcTotalTax = taxResults => {
  try {
    return taxResults.reduce((total, taxResult) => {
      if (isNaN(taxResult.tax)) throw `${taxResult.tax} is not a number`;
      return total + taxResult.tax;
    }, 0);
  } catch (err) {
    console.log(`Error: ${err}`);
    return null;
  }
};

export const taxCalculator = (salary, taxBrackets) => {
  const taxResults = [];
  let remainingSalary = salary;

  if (salary < 0 || isNaN(salary)) {
    return null;
  }

  for (const [index, _taxBracket] of taxBrackets.entries()) {
    const taxBracket = _taxBracket.taxBracket;
    const taxRate = _taxBracket.taxRate;
    const baseAmount = _taxBracket.baseAmount;
    const lastTaxBracket = index === taxBrackets.length - 1;
    const salaryLessThanTaxableAmnt = remainingSalary <= baseAmount;

    if (lastTaxBracket || salaryLessThanTaxableAmnt) {
      taxResults.push({
        taxBracket,
        taxRate,
        baseAmount: remainingSalary,
        tax: rndNumUpTwoDecimal(remainingSalary * taxRate),
      });
      break;
    } else {
      taxResults.push({
        taxBracket,
        taxRate,
        baseAmount,
        tax: baseAmount * taxRate,
      });
      remainingSalary = remainingSalary - baseAmount;
    }
  }
  return taxResults;
};
