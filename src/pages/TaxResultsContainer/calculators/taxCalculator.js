import rndNumUpTwoDecimal from "../../../utils/rndNumUpTwoDecimal";

const taxCalculator = (salary, taxTiers) => {
  const taxResults = [];

  if(salary < 0){
    console.log("Error: salary cannot be a negative value");
    return [];
  }

  for (const [index, tier] of taxTiers.entries()){
    const taxTier = tier.tier;
    const taxRate = tier.taxRate;
    const taxableAmount = tier.taxableAmount;
    const salaryLessThanTaxableAmnt = (index === taxTiers.length - 1) ? true : (salary <= taxableAmount);
      
    if(salaryLessThanTaxableAmnt){
      taxResults.push({
        taxTier,
        taxRate,
        taxableAmount: salary,
        tax: rndNumUpTwoDecimal(salary * taxRate),
      });
      break;
    }else {
      taxResults.push({
        taxTier,
        taxRate,
        taxableAmount,
        tax: (taxableAmount * taxRate),
      }); 
      salary = (salary - taxableAmount);
    }
  }
  return taxResults;
}

export default taxCalculator;