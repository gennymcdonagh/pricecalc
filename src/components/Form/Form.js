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
  const [cost, setCost] = useState({value: "", error: false});
  const [items, setItems] = useState({value: 1, error: false});
  const [time, setTime] = useState({value: "", error: false});
  const [wage, setWage] = useState({value: "", error: false});
  const [markup, setMarkup] = useState({value: "", error: false});

  const clearAll = () => {
    console.log('clearing');
    setCost({value: "", error:false});
  }

  return (
    <div className="form">
      <NumberInput
        value={cost.value}
        onChange={e => setCost({value: e.target.value, error: (e.target.value < 0)})}
        label="Cost of materials"
        id="cost"
        error={(cost.error) && "Needs to be 0 or more"}
      />

      <NumberInput
        value={items.value}
        onChange={e => setItems({value: e.target.value, error: (e.target.value < 1)})}
        label="Number of items made"
        id="items"
        error={(items.error) && "Needs to be 1 or more"}
      />

      <NumberInput
        value={time.value}
        onChange={e => setTime({value: e.target.value, error: (e.target.value < 0)})}
        label={`Hours to make ${(items >= 2) ? items + ' items' : 'an item'}`}
        id="time"
        error={(time.error) && "Needs to be 0 or more"}
      />

      <NumberInput
        value={wage.value}
        onChange={e => setWage({value: e.target.value, error: (e.target.value < 0)})}
        label="Hourly wage"
        id="wage"
        error={(wage.error) && "Needs to be 0 or more"}
      />

      <NumberInput
        value={markup.value}
        onChange={e => setMarkup({value: e.target.value, error: (e.target.value < 0)})}
        label="Retail profit markup %"
        id="markup"
        error={(markup.error) && "Needs to be 0 or more"}
      />

      <button 
        onClick={() => props.calculateTotals({
          cost: cost.value, 
          items: items.value, 
          time: time.value, 
          wage: wage.value, 
          markup: markup.value
        })}>
        Calculate
      </button>

      <button 
        onClick={clearAll}>
        Clear all
      </button>
    </div>
  )
}

Form.propTypes = {
  calculateTotals: PropTypes.func
};

export default Form;
