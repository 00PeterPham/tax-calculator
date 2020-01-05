import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import isNum from "../_lib/isNum";
import taxCalculator from "./taxCalculator";
import FormContainer from "../containers/FormContainer/FormContainer";
import TaxResultsContainer from "../containers/TaxResultsContainer/TaxResultsContainer";
import '../containers/FormContainer/formContainerStyles.less';
import '../presentational/Input/InputStyles.less'
import '../presentational/Button/ButtonStyles.less';
import '../presentational/Error/ErrorStyles.less';
import '../presentational/TotalTax/TotalTaxStyles.less';

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
        //taxCalculator() requires the 'salary' state before executing
        const { salary, taxTiers } = this.state;
        const taxResults = taxCalculator(salary, taxTiers);
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
    const { handleSubmit } = this;
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