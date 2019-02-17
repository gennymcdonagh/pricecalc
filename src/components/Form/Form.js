/* 
todo: 
time input with minutes
write test for input
format prices
favicon
styling
*/

import React, { useState } from 'react';
import NumberInput from '../Input/NumberInput';
import Result from '../Result/Result';

import './Form.css';

const calculateResults = (data) => {
  const { cost, items, time, wage, markup } = data;

  const materialsPerItem = cost / items;
  const wagePerItem = (time * wage) / items;
  const costToMake = materialsPerItem + wagePerItem;
  const profit = costToMake * (markup / 100)
  const retailPrice = costToMake + profit;

  let resultData = [
    {
      sectionName: "Single item",
      sectionData: {
        "Cost to make": costToMake,
        "Retail price": retailPrice,
        "Profit": profit,
      }
    }
  ];

  if (items > 1) {
    resultData.push(
      {
        sectionName: `Batch of ${items} items `,
        sectionData: {
          "Cost to make": costToMake * items,
          "Retail price": retailPrice * items,
          "Profit": profit * items,
        }
      }
    );
  }

  return resultData;
}

const validate = (props) => { 
  const number0OrMoreFunc = ((p) => (p < 0 || p === "" || isNaN(p)) 
  ? "Needs to be 0 or more" 
  : false)

  // todo this is a bit repetitive
  // but later on could need different validation func for time (hours/mins etc)
  const validationFunctions = {
    cost: number0OrMoreFunc,
    items: ((p) => (p < 1 || p === "" || isNaN(p)) 
    ? "Needs to be 1 or more" 
    : false),
    time: number0OrMoreFunc,
    wage: number0OrMoreFunc,
    markup: number0OrMoreFunc,
  }

  let errors = {};
  let isFormValid = true;

  //check each prop against its validation function and set form to invalid as soon as there's an error somewhere
  Object.keys(props).forEach((i) => {
    errors[i] = validationFunctions[i](props[i]);
    if (validationFunctions[i](props[i])) {
      isFormValid = false;
    }
  })

  return { errors, isFormValid }
};

const Form = (props) => {
  const [cost, setCost] = useState("");
  const [items, setItems] = useState("1");
  const [time, setTime] = useState("");
  const [wage, setWage] = useState("");
  const [markup, setMarkup] = useState("");

  const { errors, isFormValid } = validate({cost,items,time,wage,markup});
  let resultData = {};

  if (isFormValid) {
    resultData = calculateResults({cost,items,time,wage,markup});
  }

  // todo iterate over array to generate NumberInputs?
  return (
    <div className="form">
      <NumberInput
        value={cost}
        onChange={e => setCost(e.target.value)}
        label="Cost of materials"
        id="cost"
        errorState={errors.cost}
        showDollarLabel
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
        label={`Hours to make ${(items > 1) ? items + ' items' : 'an item'}`}
        id="time"
        errorState={errors.time}
      />

      <NumberInput
        value={wage}
        onChange={e => setWage(e.target.value)}
        label="Hourly wage"
        id="wage"
        errorState={errors.wage}
        showDollarLabel
      />

      <NumberInput
        value={markup}
        onChange={e => setMarkup(e.target.value)}
        label="Retail profit markup %"
        id="markup"
        errorState={errors.markup}
        showPercentLabel
      />

      {isFormValid && <Result resultData={resultData} />}

    </div>
  )
}

export default Form;
