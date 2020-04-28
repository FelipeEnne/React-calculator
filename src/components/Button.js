import React from 'react';
import PropTypes from 'prop-types';

function Button({ nameButton, idButton, colorButton }) {
  return (
    <div>
      <button type="button" className="button-calc" id={idButton} style={{ backgroundColor: colorButton }}>
        {nameButton}
      </button>
    </div>
  );
}

Button.propTypes = {
  nameButton: PropTypes.string,
  colorButton: PropTypes.string,
  idButton: PropTypes.string,
};

Button.defaultProps = {
  nameButton: '',
  colorButton: '#80808038',
  idButton: '',
};

export default Button;
