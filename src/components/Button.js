import React from 'react';
import PropTypes from 'prop-types';

function Button({
  nameButton, idButton, colorButton, wideButton,
}) {
  const wideB = wideButton ? '25%' : '50%';

  return (
    <button type="button" className="button-calc" id={idButton} style={{ backgroundColor: colorButton, width: wideB }}>
      {nameButton}
    </button>
  );
}

Button.propTypes = {
  nameButton: PropTypes.string,
  idButton: PropTypes.string,
  colorButton: PropTypes.string,
  wideButton: PropTypes.bool,
};

Button.defaultProps = {
  nameButton: '',
  idButton: '',
  colorButton: 'rgba(255, 165, 0, 0.79)',
  wideButton: true,
};

export default Button;
