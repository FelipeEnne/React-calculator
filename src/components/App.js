/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './index.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="calculator">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}

export default App;
