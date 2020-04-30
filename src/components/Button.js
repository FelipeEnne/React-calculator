import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler } = this.props;
    const { nameButton } = this.props;
    clickHandler(nameButton);
  }


  render() {
    const {
      nameButton, idButton, colorButton, wideButton,
    } = this.props;

    const wideB = wideButton ? '25%' : '50%';

    return (
      <button
        type="button"
        className="button-calc"
        id={idButton}
        style={{ backgroundColor: colorButton, width: wideB }}
        onClick={this.handleClick}
      >
        {nameButton}
      </button>
    );
  }
}

Button.propTypes = {
  nameButton: PropTypes.string,
  idButton: PropTypes.string,
  colorButton: PropTypes.string,
  wideButton: PropTypes.bool,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  nameButton: '',
  idButton: '',
  colorButton: 'rgba(255, 165, 0, 0.79)',
  wideButton: true,
  clickHandler: null,
};

export default Button;
