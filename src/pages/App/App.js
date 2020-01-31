import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import FormContainer from "../../pages/FormContainer";
import TaxResultsContainer from "../../pages/TaxResultsContainer";
import './App.less';

class App extends Component {
  state  = {
    salary: 0,
  }

  goResultsPage = () => {
    this.props.history.push('/results');
  }
  handleSubmit = (evt) => {
    const inputVal = evt.salaryInput.value;
    const inputValSanitized = inputVal.replace(/[^0-9.-]+/g, '');
    const salary = parseFloat(inputValSanitized);
    
    this.setState({
      salary,
    }, 
      this.goResultsPage()
    );
  }

  render(){
    const { handleSubmit } = this;
    const { salary } = this.state;
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
          />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);
