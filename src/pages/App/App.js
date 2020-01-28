import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import goResultsPage from "./utils/routes/goResultsPage";
import setSalary from "./utils/setState/setSalary";
import setTaxResults from "./utils/setState/setTaxResults";
import Form from "../../pages/Form";
import TaxResultsContainer from "../../pages/TaxResultsContainer";
import './App.less';

class App extends Component {
  state  = {
    salary: 0,
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

  handleSubmit = async (evt) => {
    const inputVal = evt.salaryInput.value;
    const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
    const salarySanitized = parseFloat(inputValSanitized);
    
    await setSalary(this, salarySanitized);
    await setTaxResults(this); //salary needs to be set before taxResults
    goResultsPage(this); //taxResults needs to be set before going to results page
  }
  render(){
    const { handleSubmit } = this;
    const { salary, taxResults, taxTiers } = this.state;
    return (
      <Switch>
        <Route exact path="/">
          <Form 
            handleSubmit={handleSubmit} 
          />
        </Route>
        <Route path="/results">
          <TaxResultsContainer 
            salary={salary}
            taxTiers={taxTiers}
            taxResults={taxResults}
          />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);
