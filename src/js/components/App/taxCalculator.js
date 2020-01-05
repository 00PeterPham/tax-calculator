import rndNumUp from "../_lib/rndNumUp";

const taxCalculator = (salary, taxTiers) => {
  // let salary = this.state.salary;
  // const taxTiers = this.state.taxTiers;
  const taxResults = [];

  for (const [index, tier] of taxTiers.entries()){
    const taxTier = tier.tier;
    const taxRate = tier.taxRate;
    const taxableAmount = tier.taxableAmount;
    
    //Since the last tier does not have a limit on what the taxableAmount is, I multiply the taxRate with the entire leftover salary amount
    const salaryLessThanTaxableAmnt = (index === taxTiers.length - 1) ? true : (salary <= taxableAmount); //make true if last taxTier is being calculated
      
    if(salaryLessThanTaxableAmnt){
      taxResults.push({
        taxTier,
        taxRate,
        taxableAmount: salary,
        tax: rndNumUp(salary * taxRate),
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