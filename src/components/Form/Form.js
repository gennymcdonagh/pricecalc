import React, { Component } from 'react';
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

        <input
          value={cost}
          onChange={this.handleInputChange}
          placeholder="Cost of materials"
          type="number"
          name="cost"
          required
        />

        <input
          value={items}
          onChange={this.handleInputChange}
          placeholder="Number of items made"
          type="number"
          name="items"
          required
        />

        <input
          value={time}
          onChange={this.handleInputChange}
          placeholder="Hours to make that many items"
          type="number"
          name="time"
          required
        />

        <input
          value={wage}
          onChange={this.handleInputChange}
          placeholder="Hourly wage"
          type="number"
          name="wage"
          required
        />

        <input
          value={markup}
          onChange={this.handleInputChange}
          placeholder="Retail profit markup %"
          type="number"
          name="markup"
          required
        />

        <button onClick={() => calculateTotals(this.state)}>calculate</button>
      </div>
    );
  }
}

export default Form;
