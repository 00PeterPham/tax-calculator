const calcTotalTax = (taxResults) => {
  return taxResults.reduce((total, taxResult) => {
    return total + taxResult.tax;
  }, 0)
}
export default calcTotalTax;