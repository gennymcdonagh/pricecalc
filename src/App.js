import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';
import { Result } from './components/Result/Result';

class App extends Component {

  calculateTotals = (data) => {
    const { cost, items, time, wage, markup } = data;

    const materialsPerItem = cost / items;
    const wagePerItem = (time * wage) / items;
    const costToMake = materialsPerItem + wagePerItem;
    const profit = costToMake * (markup / 100)
    const retailPrice = costToMake + profit;

    this.setState({
      resultData: {
        "Cost to make one item": costToMake,
        "Retail price": retailPrice,
        "Profit": profit,
      }
    });
  }

  clearTotals = () => {
    this.setState({
      resultData: {}
    });
  }

  constructor() {
    super();
    this.state = {
      resultData: {}
    };
  }

  render() {
    const { resultData } = this.state;
    return (
      <div className="App">
        <h2>pricecalc</h2>
        <Form calculateTotals={this.calculateTotals} clearTotals={this.clearTotals} />
        {resultData && <Result data={resultData} />}
      </div>
    );
  }
}

export default App;
