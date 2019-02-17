import React, { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

export const NumberInput = (props) => {
  const {id, label, value, onChange, errorState} = props;
  const [showError, setShowError] = useState(false);

  return (
    <div className="number-input">
      <label className="number-input__label" htmlFor={id}>
        {label}
      </label>
      <input className="number-input__field"
          value={value}
          onChange={e => onChange(e)}
          onBlur={() => setShowError(true)}
          id={id}
          type="number"
          name={id}
          required
        />
        {errorState !== false && showError && 
          <div className="number-input__error">{errorState}</div>
        }
    </div>
  )
};

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

