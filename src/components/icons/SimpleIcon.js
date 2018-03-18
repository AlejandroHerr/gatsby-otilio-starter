import React from 'react';
import PropTypes from 'prop-types';

const SimpleIcon = ({ children, className, style }) => (
  <svg
    className={className}
    style={{
        fill: 'currentColor',
      height: '1.5rem',
      width: '1.5rem',
      ...style,
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    {children}
  </svg>
);

SimpleIcon.defaultProps = {
  className: '',
  style: {},
};

SimpleIcon.propTypes = {
  children: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default SimpleIcon;
