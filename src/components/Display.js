import React from 'react';
import PropTypes from 'prop-types';

function Display({ result }) {
  return (
    <div className="display-calc">
      <div className="display-value" id="display">
        {result}
      </div>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
