import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Form from "../../pages/Form";
import TaxResults from "../../pages/TaxResults";
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
      //this.goResultsPage()
    );
  }

  render(){
    const { handleSubmit } = this;
    const { salary } = this.state;
    return (
      <Switch>
        <Route exact path="/">
          <Form 
            handleSubmit={handleSubmit} 
          />
        </Route>
        <Route path="/results">
          <TaxResults 
            salary={salary}
          />
        </Route>
      </Switch>
    )
  }
}

export default withRouter(App);
