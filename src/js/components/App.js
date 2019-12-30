import React, { Component } from "react";
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import rndNumUp from "../utils/rndNumUp";
import FormContainer from "./containers/FormContainer";
import TaxResultsContainer from "./containers/TaxResultsContainer";

class App extends Component {
  state = {
    salary: 0,
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
    taxResults: []
  }

  taxCalculator = () => {
    let salary = this.state.salary;
    const taxTiers = this.state.taxTiers;
    const taxResults = [];
  
    for(let i = 0; i <= taxTiers.length; i++){
      const taxTier = taxTiers[i].tier;
      const taxRate = taxTiers[i].taxRate;
      const taxableAmount = taxTiers[i].taxableAmount;
      
      //Since the last tier does not have a limit on what the taxableAmount is, I multiply the taxRate with the entire leftover salary amount
      const salaryLessThanTaxableAmnt = (i === taxTiers.length - 1) ? true : (salary <= taxableAmount); //make true if last taxTier is being calculated
        
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
  handleSubmit = (evt) => {
    evt.preventDefault();
    const inputVal = evt.target.salaryInput.value;
    const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
    const salary = parseFloat(inputValSanitized);

    this.props.history.push('/results');///

    this.setState({
      salary,
    }, () => {
      //taxCaclulator() requires the 'salary' state before executing
      const taxResults = this.taxCalculator();
      this.setState({
        taxResults,
      })
    });
  }
  render(){
    const { handleSubmit } = this;
    const { salary, taxTiers, taxResults } = this.state;
    return (
      <>
        <Route exact path="/">
          <FormContainer handleSubmit={handleSubmit} />
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