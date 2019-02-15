import React from 'react';
import './Input.css';

export const NumberInput = (props) => {
  const {id, label, value, onChange} = props;

  return (
    <div className="number-input">
      <label htmlFor={id}>
        {label}
      </label>
      <input
          value={value}
          onChange={onChange}
          id={id}
          type="number"
          name={id}
          required
        />
    </div>
  )
};
