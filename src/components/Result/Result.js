import React from 'react';
import './Result.css';
import PropTypes from 'prop-types';

export const Result = (props) => {
    const { resultData } = props;
    let html = [];

    resultData.forEach(s => {
      html.push(
        <h3 key={s.sectionName}>{s.sectionName}</h3>
      );

      for (const prop in s.sectionData) {
        html.push(
          <li key={`${s.sectionName} ${prop}`}>
            <span className="result-list__label">{prop}: </span>
            <span className="result-list__value">${s.sectionData[prop]}</span>
          </li>
        );
      }
    })
    
    return (
      <div className="result-list">
        {html}
      </div>
    )
};

Result.propTypes = {
  resultData: PropTypes.arrayOf(
    PropTypes.shape({
      sectionName: PropTypes.string,
      sectionData: PropTypes.objectOf(PropTypes.number)
    })
  )
}

export default Result;