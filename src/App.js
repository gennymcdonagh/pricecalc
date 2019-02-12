import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result'

class App extends Component {

  calculateTotals = (number) => {
    console.log('calc');
    this.setState({resultData : number * 2})
  }

  constructor() {
    super();
    this.state = {
      resultData: 0
    };
  }

  render() {
    const {resultData} = this.state;
    return (
      <div className="App">
        <h2>pricecalc</h2>
        <Form calculateTotals={this.calculateTotals} />
        <Result data={resultData} />
      </div>
    );
  }
}

export default App;
