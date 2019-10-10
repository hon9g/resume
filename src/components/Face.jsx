import PropTypes from 'prop-types';
import React from 'react';

const Face = ({ circle, square }) => {
  const classes = `face${circle ? ' circle' : ''}`;
  return (
    <div className={classes}>
      <div className="eye left" />
      <div className="eye right" />
      <div className="mouth" />
    </div>
  );
};

Face.propTypes = {
  circle: PropTypes.bool,
  square: PropTypes.bool,
};

Face.defaultProps = {
  circle: false,
  square: false,
};

export default Face;
