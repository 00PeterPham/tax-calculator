import taxCalculator from "../taxCalculator";

const setTaxResults = (component) => {
  const { salary, taxTiers } = component.state; 
  const taxResults = taxCalculator(salary, taxTiers);

  component.setState({
    taxResults,
  })
}
export default setTaxResults;