import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';

export const Result = (props) => {
    const { data } = props;
    let html = [];

    for (const prop in data) {
      html.push(
        <li key={prop}>
          <span className="result-list__label">{prop}: </span>
          <span className="result-list__value">${data[prop]}</span>
        </li>
      );
    }
    
    return (
      <ul className="result-list">
        {html}
      </ul>
    )
};

Result.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]))
}