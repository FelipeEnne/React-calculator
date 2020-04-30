/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import './index.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(nameButton) {
    const { total, next, operation } = this.state;
    const calc = calculate({ total, next, operation }, nameButton);

    this.setState(() => ({
      total: calc.total,
      next: calc.next,
      operation: calc.operation,
    }));
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="calculator">
        <Display value={total} />
        <ButtonPanel handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
