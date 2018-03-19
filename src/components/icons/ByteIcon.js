import React from 'react';
import PropTypes from 'prop-types';

const ByteIcon = ({ children, className, style }) => (
  <svg
    className={className}
    style={{
      width: '.75em',
      height: '.75em',
      fill: 'none',
      stroke: 'currentColor',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeWidth: '2',
      ...style,
    }}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

ByteIcon.defaultProps = {
  className: '',
  style: {},
};

ByteIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default ByteIcon;
