import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './ByteIcon.module.scss';

const ByteIcon = ({ bold, className, icon }) => (
  <svg
    className={classnames(
      styles.byte_icon,
      styles[`byte_icon__${icon}`],
      { [styles.byte_icon__bold]: bold },
      className,
    )}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path />
  </svg>
);

ByteIcon.defaultProps = {
  bold: false,
  className: '',
};

ByteIcon.propTypes = {
  bold: PropTypes.bool,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
};

export default ByteIcon;
