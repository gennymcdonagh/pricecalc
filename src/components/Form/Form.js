/* 
todo: validation 
conditional label for hours field
units
*/

import React, { Component } from 'react';
import { NumberInput } from '../Input/NumberInput';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: "",
      items: "",
      time: "",
      wage: "",
      markup: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    const { calculateTotals } = this.props;
    const { cost, items, time, wage, markup } = this.state;

    return (
      <div className="form">

        <NumberInput
          value={cost}
          onChange={this.handleInputChange}
          label="Cost of materials"
          id="cost"
        />

        <NumberInput
          value={items}
          onChange={this.handleInputChange}
          label="Number of items made"
          id="items"
        />

        <NumberInput
          value={time}
          onChange={this.handleInputChange}
          label="Hours to make that many items"
          id="time"
        />

        <NumberInput
          value={wage}
          onChange={this.handleInputChange}
          label="Hourly wage"
          id="wage"
        />

        <NumberInput
          value={markup}
          onChange={this.handleInputChange}
          label="Retail profit markup %"
          id="markup"
        />

        <button onClick={() => calculateTotals(this.state)}>Calculate</button>
      </div>
    );
  }
}

export default Form;
