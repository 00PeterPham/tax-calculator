import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import rndNumUp from "./_lib/rndNumUp";
import isNum from "./_lib/isNum";
import FormContainer from "./containers/FormContainer";
import TaxResultsContainer from "./containers/TaxResultsContainer";
import './containers/FormContainer/formContainerStyles.less';
import './presentational/Input/InputStyles.less'
import './presentational/Button/ButtonStyles.less';
import './presentational/Error/ErrorStyles.less';
import './presentational/TotalTax/TotalTaxStyles.less';

class App extends Component {
  state = {
    salary: 0,
    salaryInputError: false,
    taxResults: [],
    taxTiers: [
      {
        tier: 1,
        taxRate: 0.15,
        taxableAmount: 47630,
      },
      {
        tier: 2,
        taxRate: 0.205,
        taxableAmount: 47629,
      },
      {
        tier: 3,
        taxRate: 0.26,
        taxableAmount: 52408,
      },
      {
        tier: 4,
        taxRate: 0.29,
        taxableAmount: 62704,
      },
      {
        tier: 5,
        taxRate: 0.33,
        taxableAmount: null,
      },
    ],
  }

  taxCalculator = () => {
    let salary = this.state.salary;
    const taxTiers = this.state.taxTiers;
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
  goResultsPage = () => {
    this.props.history.push('/results');
  }
  handleSubmit = (evt) => {
    evt.preventDefault();
    const inputVal = evt.target.salaryInput.value;
    const inputIsNotEmpty = inputVal !== '';
    const inputIsNum = isNum(inputVal);
    const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
    const salary = parseFloat(inputValSanitized);

    if(inputIsNum && inputIsNotEmpty){
      this.setState({
        salary,
        salaryInputError: false,
      }, () => {
        //taxCaclulator() requires the 'salary' state before executing
        const taxResults = this.taxCalculator();
        this.setState({
          taxResults,
        })
      });
  
      this.goResultsPage();
    } else {
      this.setState({
        salaryInputError: true,
      })
    }
  }
  render(){
    const { goBack, handleSubmit } = this;
    const { salary, salaryInputError, taxResults, taxTiers } = this.state;
    return (
      <>
        <Route exact path="/">
          <FormContainer 
            handleSubmit={handleSubmit} 
            salaryInputError={salaryInputError}
          />
        </Route>
        <Route path="/results">
          <TaxResultsContainer 
            salary={salary}
            taxTiers={taxTiers}
            taxResults={taxResults}
          />
        </Route>
      </>
    )
  }
}

export default withRouter(App);