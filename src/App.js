import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result'

class App extends Component {

  calculateTotals = (data) => {
    console.log(data);
    const { cost, items, time, wage, markup } = data;

    const materialsPerItem = cost / items;
    const wagePerItem = (time * wage) / items;
    const materialsWagePerItem = materialsPerItem + wagePerItem;
    const markupPrice = materialsWagePerItem * (markup / 100)
    const total = materialsWagePerItem + markupPrice;

    this.setState({
      resultData: total
    });
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
