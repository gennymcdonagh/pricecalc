import React, { Component } from 'react';
import './Result.css';

class Result extends Component {
    render() {
      const { data } = this.props;
      console.log(data);
      return (
        <div>result: {data}</div>
      )
    }
}

export default Result;