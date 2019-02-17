import React, { useState } from 'react';
import './Input.css';
import PropTypes from 'prop-types';

const NumberInput = (props) => {
  const {id, label, showDollarLabel, showPercentLabel, value, onChange, errorState} = props;
  const [showError, setShowError] = useState(false);

  //todo clean up
  let inputClassName = 'number-input__wrapper';
  if (showDollarLabel || showPercentLabel) {
    inputClassName += ' number-input__wrapper--icon';
  }
  if (showPercentLabel) {
    inputClassName += ' number-input__wrapper--icon-right';
  }

  return (
    <div className="number-input">
      <label className="number-input__label" htmlFor={id}>
        {label}
      </label>

      <div className={inputClassName}>
        <input value={value}
          onChange={e => onChange(e)}
          onBlur={() => setShowError(true)}
          id={id}
          type="number"
          name={id}
          required
        />
        {showDollarLabel && <i>$</i>}
        {showPercentLabel && <i>%</i>}
      </div>

      {errorState !== false && showError && 
        <div className="number-input__error">{errorState}</div>
      }
    </div>
  )
};

NumberInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  showDollarLabel: PropTypes.bool,
  showPercentLabel: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorState: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

export default NumberInput;

