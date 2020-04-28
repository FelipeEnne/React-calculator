import React from 'react';
import PropTypes from 'prop-types';

function Button({
  nameButton, idButton, colorButton, wideButton,
}) {
  const colorB = colorButton ? 'rgba(128, 128, 128, 0.22)' : 'rgba(255, 165, 0, 0.79)';
  const wideB = wideButton * 25;
  const wideR = `${wideB}%`;

  return (
    <button type="button" className="button-calc" id={idButton} style={{ backgroundColor: colorB, width: wideR }}>
      {nameButton}
    </button>
  );
}

Button.propTypes = {
  nameButton: PropTypes.string,
  idButton: PropTypes.string,
  colorButton: PropTypes.bool,
  wideButton: PropTypes.number,
};

Button.defaultProps = {
  nameButton: '',
  idButton: '',
  colorButton: true,
  wideButton: 1,
};

export default Button;
