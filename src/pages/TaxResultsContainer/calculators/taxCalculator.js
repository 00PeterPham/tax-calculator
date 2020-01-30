import rndNumUpTwoDecimal from "../../../utils/rndNumUpTwoDecimal";

const taxCalculator = (salary, taxBrackets) => {
  const taxResults = [];
  let remainingSalary = salary;

  if(salary < 0){
    console.log("Error: salary cannot be a negative value");
    return [];
  }

  for (const [index, _taxBracket] of taxBrackets.entries()){
    const taxBracket = _taxBracket.taxBracket;
    const taxRate = _taxBracket.taxRate;
    const baseAmount = _taxBracket.baseAmount;
    const lastTaxBracket = (index === taxBrackets.length - 1);
    const salaryLessThanTaxableAmnt = (remainingSalary <= baseAmount);
      
    if(lastTaxBracket || salaryLessThanTaxableAmnt){
      taxResults.push({
        taxBracket,
        taxRate,
        baseAmount: remainingSalary,
        tax: rndNumUpTwoDecimal(remainingSalary * taxRate),
      });
      break;
    }else {
      taxResults.push({
        taxBracket,
        taxRate,
        baseAmount,
        tax: (baseAmount * taxRate),
      }); 
      remainingSalary = (remainingSalary - baseAmount);
    }
  }
  return taxResults;
}

export default taxCalculator;