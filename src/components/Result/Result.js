import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
      const { data } = this.props;

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
    }
}

export default Result;