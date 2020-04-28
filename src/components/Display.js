/* eslint-disable react/no-unused-state */
import React from 'react';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 0,
    };
  }

  render() {
    return (
      <div className="DisplayCalc">
        0
      </div>
    );
  }
}

export default Display;
