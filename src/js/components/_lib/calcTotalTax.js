const calcTotalTax = (taxResults) => {
  try {
    return taxResults.reduce((total, taxResult) => {
      return total + taxResult.tax;
    }, 0)
  }
  catch(err){
    alert('there be an error');
  }
}
export default calcTotalTax;