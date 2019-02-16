import React, { Component } from 'react';
import './App.css';
import Form from './components/Form/Form';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h2>pricecalc</h2>
        <Form />
      </div>
    );
  }
}

export default App;
