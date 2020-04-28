/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
import React from 'react';
import Big from 'big.js';
import PropTypes from 'prop-types';
import './index.css';
import Display from './Display';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div className="calculator">
        <Display value={0} />
      </div>
    );
  }
}

export default App;
