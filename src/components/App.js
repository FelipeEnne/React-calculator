import React from "react";
import calculate from "../logic/calculate";
import "./index.css";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

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
    let { total } = this.state;

    if (total == null) {
      total = "0";
    }

    return (
      <div className="calculator">
        <Display result={total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
