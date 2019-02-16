/* 
todo: validation 
time input with minutes
conditional label for hours field
units
write test for input
*/

import React, { useState } from 'react';
import { NumberInput } from '../Input/NumberInput';
import './Form.css';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const [cost, setCost] = useState("");
  const [items, setItems] = useState("");
  const [time, setTime] = useState("");
  const [wage, setWage] = useState("");
  const [markup, setMarkup] = useState("");

  return (
    <div className="form">
      <NumberInput
        value={cost}
        onChange={e => setCost(e.target.value)}
        label="Cost of materials"
        id="cost"
      />

      <NumberInput
        value={items}
        onChange={e => setItems(e.target.value)}
        label="Number of items made"
        id="items"
      />

      <NumberInput
        value={time}
        onChange={e => setTime(e.target.value)}
        label="Hours to make that many items"
        id="time"
      />

      <NumberInput
        value={wage}
        onChange={e => setWage(e.target.value)}
        label="Hourly wage"
        id="wage"
      />

      <NumberInput
        value={markup}
        onChange={e => setMarkup(e.target.value)}
        label="Retail profit markup %"
        id="markup"
      />

      <button 
        onClick={() => props.calculateTotals({cost, items, time, wage, markup})}>
        Calculate
      </button>
    </div>
  )
}

Form.propTypes = {
  calculateTotals: PropTypes.func
};

export default Form;
