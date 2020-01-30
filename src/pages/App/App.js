import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import FormContainer from "../../pages/FormContainer";
import TaxResultsContainer from "../../pages/TaxResultsContainer";
import './App.less';

class App extends Component {
  state  = {
    salary: 0,
  }

  clearTaxResults = () => {
    this.setState({
      taxResults: [],
    })
  }
  setSalary = (salary) => {
    this.setState({
      salary,
    })
  }
  goResultsPage = () => {
    this.props.history.push('/results');
  }
  handleSubmit = async (evt) => {
    const inputVal = evt.salaryInput.value;
    const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
    const salarySanitized = parseFloat(inputValSanitized);
    
    await this.setSalary(salarySanitized);
    this.goResultsPage();
  }


  render(){
    const { handleSubmit, clearTaxResults } = this;
    const { salary } = this.state;
    const taxTiers = [
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
    ];
    return (
      <Switch>
        <Route exact path="/">
          <FormContainer 
            handleSubmit={handleSubmit} 
          />
        </Route>
        <Route path="/results">
          <TaxResultsContainer 
            salary={salary}
            taxTiers={taxTiers}
            clearTaxResults={clearTaxResults}
          />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);
