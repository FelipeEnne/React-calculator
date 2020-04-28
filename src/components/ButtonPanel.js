import React from 'react';
//import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  renderbutton(name, id, color) {
    return (<Button nameButton={name} idButton={id} colorButton={color} />);
  }

  render() {
    return (
      <div className="buttonPanel">
        <div className="panel-row">
          {this.renderbutton('AC', 'ACid')}
          {this.renderbutton('+/-', '+/-id')}
          {this.renderbutton('%', '%id')}
          {this.renderbutton('÷', '÷id', '#ffa500c9')}
        </div>
        <div className="panel-row">
          {this.renderbutton('7', '7id')}
          {this.renderbutton('8', '8id')}
          {this.renderbutton('9', '9id')}
          {this.renderbutton('x', 'xid', '#ffa500c9')}
        </div>
        <div className="panel-row">
          {this.renderbutton('4', '4id')}
          {this.renderbutton('5', '5id')}
          {this.renderbutton('6', '6id')}
          {this.renderbutton('-', '-id', '#ffa500c9')}
        </div>
        <div className="panel-row-last">
          {this.renderbutton('0', '0id')}
          {this.renderbutton('.', '.id')}
          {this.renderbutton('=', '=id', '#ffa500c9')}
        </div>
      </div>
    );
  }
}


export default ButtonPanel;
