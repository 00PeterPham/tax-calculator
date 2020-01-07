import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import isNum from "./utils/isNum";
import goResultsPage from "./utils/routes/goResultsPage";
import setSalary from "./utils/setState/setSalary";
import setSalaryInputError from "./utils/setState/setSalaryInputError";
import setTaxResults from "./utils/setState/setTaxResults";
import FormContainer from "../containers/FormContainer";
import TaxResultsContainer from "../containers/TaxResultsContainer";
import '../containers/FormContainer/formContainerStyles.less';
import '../presentational/Input/InputStyles.less'
import '../presentational/Button/ButtonStyles.less';
import '../presentational/Error/ErrorStyles.less';
import '../presentational/TotalTax/TotalTaxStyles.less';

class App extends Component {
  constructor(props){
    super(props);
    this.state  = {
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
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const inputVal = evt.target.salaryInput.value;
    const inputIsNotEmpty = inputVal !== '';
    const inputIsNum = isNum(inputVal);

    if(inputIsNum && inputIsNotEmpty){
      const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
      const salarySanitized = parseFloat(inputValSanitized);
      
      await setSalary(this, salarySanitized);
      await setSalaryInputError(this, false);
      await setTaxResults(this); //salary needs to be set before taxResults
      goResultsPage(this);
    } else {
      this.setSalaryInputError(true);
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

/**
 TODO: clear state when clicking 'back'
 - move setSalaryAndSalaryInputError and setTaxResults to App/utils/setState
 */