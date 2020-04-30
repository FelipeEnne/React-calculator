import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';


class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(nameButton) {
    const { clickHandler } = this.props;
    clickHandler(nameButton);
  }

  // eslint-disable-next-line class-methods-use-this
  renderbutton(name, id, color, wide) {
    return (
      <Button
        nameButton={name}
        idButton={id}
        colorButton={color}
        wideButton={wide}
      />
    );
  }

  render() {
    const gray = 'rgba(128, 128, 128, 0.22)';
    return (
      <div className="buttonPanel">
        <div className="panel-row">
          {this.renderbutton('AC', 'ACid', gray)}
          {this.renderbutton('+/-', '+/-id', gray)}
          {this.renderbutton('%', '%id', gray)}
          {this.renderbutton('÷', '÷id')}
        </div>
        <div className="panel-row">
          {this.renderbutton('7', '7id', gray)}
          {this.renderbutton('8', '8id', gray)}
          {this.renderbutton('9', '9id', gray)}
          {this.renderbutton('x', 'xid')}
        </div>
        <div className="panel-row">
          {this.renderbutton('4', '4id', gray)}
          {this.renderbutton('5', '5id', gray)}
          {this.renderbutton('6', '6id', gray)}
          {this.renderbutton('-', '-id')}
        </div>
        <div className="panel-row">
          {this.renderbutton('1', '1id', gray)}
          {this.renderbutton('2', '2id', gray)}
          {this.renderbutton('3', '3id', gray)}
          {this.renderbutton('+', '+id')}
        </div>
        <div className="panel-row">
          {this.renderbutton('0', '0id', gray, false)}
          {this.renderbutton('.', '.id', gray)}
          {this.renderbutton('=', '=id')}
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};


export default ButtonPanel;
