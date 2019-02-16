import React, { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

export const NumberInput = (props) => {
  const {id, label, value, onChange, error} = props;
  const [showError, setShowError] = useState(false);

  return (
    <div className="number-input">
      <label htmlFor={id}>
        {label}
      </label>
      <input
          value={value}
          onChange={e => {setShowError(false); onChange(e);}}
          onBlur={() => error && setShowError(true)}
          id={id}
          type="number"
          name={id}
          required
        />
        {showError && <div className="number-input__error">{error}</div>}
    </div>
  )
};

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

