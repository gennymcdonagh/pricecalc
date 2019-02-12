import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: null};
  }

  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  render() {
    const { calculateTotals } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="form">
        form
        <div>
          <label htmlFor="input1">input:</label>
          <input id="input1" value={inputValue} onChange={e => this.updateInputValue(e)} />
        </div>
        <button onClick={() => calculateTotals(inputValue)}>calculate</button>
      </div>
    );
  }
}

export default Form;
