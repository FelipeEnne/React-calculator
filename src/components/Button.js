import React from 'react';
import PropTypes from 'prop-types';

function Button({ nameButton, idButton, colorButton }) {
  const colorB = colorButton ? 'rgba(128, 128, 128, 0.22)' : 'rgba(255, 165, 0, 0.79)';

  return (
    <div>
      <button type="button" className="button-calc" id={idButton} style={{ backgroundColor: colorB }}>
        {nameButton}
      </button>
    </div>
  );
}

Button.propTypes = {
  nameButton: PropTypes.string,
  colorButton: PropTypes.bool,
  idButton: PropTypes.string,
};

Button.defaultProps = {
  nameButton: '',
  colorButton: true,
  idButton: '',
};

export default Button;
