import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { sanitize } from './logic/sanitize.js';
import Form from '../../pages/Form';
import TaxResults from '../../pages/TaxResults';
import './App.less';

class App extends Component {
  state = {
    salary: 0,
  };

  handleSubmit = (evt, callback) => {
    const inputVal = evt.salaryInput.value;
    const salary = sanitize(inputVal);

    this.setState(
      {
        salary,
      },
      callback(),
    );
  };

  render() {
    const { handleSubmit } = this;
    const { salary } = this.state;
    return (
      <Router basename={window.location.pathname}>
        <Route exact path="/">
          <Form handleSubmit={handleSubmit} />
        </Route>
        <Route path="/results">
          <TaxResults salary={salary} />
        </Route>
      </Router>
    );
  }
}

export default App;
