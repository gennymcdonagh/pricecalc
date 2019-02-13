import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
      const { data } = this.props;

      let html = [];

      for (const prop in data) {
        html.push(<div key={prop}><span>{prop}: </span><span>{data[prop]}</span></div>);
      }
      
      return (
        <div>
          {html}
        </div>
      )
    }
}

export default Result;