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

      let sectionRows = [];

      for (const prop in s.sectionData) {
        sectionRows.push(
          <tr className="result-list__tr" key={`${s.sectionName} ${prop}`}>
            <td className="result-list__td">{prop}: </td>
            <td className="result-list__td">${s.sectionData[prop].toFixed(2)}</td>
          </tr>
        );
      }

      html.push(
        <table key={`${s.sectionName}-table`}>
          {sectionRows}
        </table>
      )
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