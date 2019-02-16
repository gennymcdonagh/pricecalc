/* 
todo: 
time input with minutes
units
write test for input
*/

import React, { useState } from 'react';
import { NumberInput } from '../Input/NumberInput';
import './Form.css';
import PropTypes from 'prop-types';

export const Form = (props) => {
  const [cost, setCost] = useState("");
  const [items, setItems] = useState("1");
  const [time, setTime] = useState("");
  const [wage, setWage] = useState("");
  const [markup, setMarkup] = useState("");

  const clearAll = () => {
    //todo
  }

  const validate = (props) => {  
    return {
      cost: (props.cost < 0 || props.cost === "" || isNaN(props.cost)) 
        ? "Needs to be 0 or more" 
        : false,
      items: (props.items < 1 || !Number.isInteger(Number(props.items)))
        ? "Needs to be 1 or more"
        : false,
      time: (props.time < 0 || props.time === "" || isNaN(props.time)) 
        ? "Needs to be 0 or more" 
        : false,
      wage: (props.wage < 0 || props.wage === "" || isNaN(props.wage)) 
        ? "Needs to be 0 or more"
        : false,
      markup: (props.markup < 0 || props.markup === "" || isNaN(props.markup)) 
        ? "Needs to be 0 or more"
        : false,
    }
  };

  const errors = validate({cost,items,time,wage,markup});
  const isFormValid = (Object.values(errors).every((v) => v === false));

  return (
    <div className="form">
      <NumberInput
        value={cost}
        onChange={e => setCost(e.target.value)}
        label="Cost of materials"
        id="cost"
        errorState={errors.cost}
      />

      <NumberInput
        value={items}
        onChange={e => setItems(e.target.value)}
        label="Number of items made"
        id="items"
        errorState={errors.items}
      />

      <NumberInput
        value={time}
        onChange={e => setTime(e.target.value)}
        label={`Hours to make ${(items >= 2) ? items + ' items' : 'an item'}`}
        id="time"
        errorState={errors.time}
      />

      <NumberInput
        value={wage}
        onChange={e => setWage(e.target.value)}
        label="Hourly wage"
        id="wage"
        errorState={errors.wage}
      />

      <NumberInput
        value={markup}
        onChange={e => setMarkup(e.target.value)}
        label="Retail profit markup %"
        id="markup"
        errorState={errors.markup}
      />

      <button 
        className={isFormValid ? '': 'disabled'}
        onClick={() => {
          if (isFormValid) {
            console.log('all valid');
            props.calculateTotals({
              cost: cost, 
              items: items, 
              time: time, 
              wage: wage, 
              markup: markup
            })
          } else {
            console.log('somethings invalid')
            props.clearTotals();
          }
        }}
      >
        Calculate
      </button>

    </div>
  )
}

Form.propTypes = {
  calculateTotals: PropTypes.func
};

export default Form;
