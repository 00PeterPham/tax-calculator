const calcTotalTax = (taxResults) => {
  return taxResults.reduce((total, taxResult) => {
    return total + taxResult.tax;
  }, taxResults[0].tax)
}
export default calcTotalTax;