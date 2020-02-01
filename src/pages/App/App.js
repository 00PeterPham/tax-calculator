import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import { sanitize } from "./sanitize.js";
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
    const salary = sanitize(inputVal);
    
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
      <>
        <Route exact path="/">
          <Form handleSubmit={handleSubmit} />
        </Route>
        <Route path="/results">
          <TaxResults salary={salary} />
        </Route>
      </>
    )
  }
}

export default withRouter(App);