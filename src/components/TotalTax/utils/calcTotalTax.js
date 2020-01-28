const calcTotalTax = (taxResults) => {
  try {
    return taxResults.reduce((total, taxResult) => {
      return total + taxResult.tax;
    }, 0)
  }
  catch(err){
    console.log('calcTotalTax() being passed incorrect type of value or no value');
  }
}
export default calcTotalTax;