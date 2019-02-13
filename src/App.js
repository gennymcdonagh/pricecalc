import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Result from './components/Result/Result'

class App extends Component {

  calculateTotals = (data) => {
    const { cost, items, time, wage, markup } = data;

    const materialsPerItem = cost / items;
    const wagePerItem = (time * wage) / items;
    const costToMake = materialsPerItem + wagePerItem;
    const profit = costToMake * (markup / 100)
    const retailPrice = costToMake + profit;

    this.setState({
      "Cost to make": costToMake,
      "Retail price": retailPrice,
      "Profit": profit,
    });
  }

  constructor() {
    super();
    this.state = {
      "Cost to make": 0,
      "Retail price": 0,
      "Profit": 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h2>pricecalc</h2>
        <Form calculateTotals={this.calculateTotals} />
        <Result data={this.state} />
      </div>
    );
  }
}

export default App;
