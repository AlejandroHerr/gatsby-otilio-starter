import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './SimpleIcon.module.scss';

const SimpleIcon = ({ brand, className, style }) => (
  <svg
    className={classnames(styles.simple_icon, styles[`simple_icon__${brand}`], className)}
    style={{ ...style }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path />
  </svg>
);

SimpleIcon.defaultProps = {
  className: '',
  style: {},
};

SimpleIcon.propTypes = {
  brand: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default SimpleIcon;
