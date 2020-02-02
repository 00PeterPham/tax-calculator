export const rndNumUpTwoDecimal = num => {
  return Math.round(num * 100) / 100;
};

export const taxCalculator = (salary, taxBrackets) => {
  const taxResults = [];
  let remainingSalary = salary;

  if (salary < 0 || isNaN(salary)) {
    return null;
  }

  for (const [index, _taxBracket] of taxBrackets.entries()) {
    const { baseAmount, taxBracket, taxRate } = _taxBracket;
    const lastTaxBracket = index === taxBrackets.length - 1;
    const salaryLessThanBaseAmnt = remainingSalary <= baseAmount;

    if (lastTaxBracket || salaryLessThanBaseAmnt) {
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

export const calcTotalTax = taxResults => {
  const sumTax = taxResults.reduce((total, taxResult) => {
    const tax = taxResult.tax;
    return total + tax;
  }, 0);

  if (typeof sumTax === 'string') {
    console.error(`Cannot calculate total tax from string. "${sumTax}" Must be a number`);
    return null;
  }
  return sumTax;
};
