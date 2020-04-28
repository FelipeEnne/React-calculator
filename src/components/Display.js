import React from 'react';
import PropTypes from 'prop-types';

function Display({ value }) {
  return (
    <div className="display-calc">
      <div className="display-value">
        {value}
      </div>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.number,
};

Display.defaultProps = {
  value: 0,
};

export default Display;
