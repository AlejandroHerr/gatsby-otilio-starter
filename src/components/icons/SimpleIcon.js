// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './SimpleIcon.module.scss';

type PropsType = {
  brand: string,
  className?: string,
  style?: { [string]: string},
};

const SimpleIcon = ({ brand, className, style }: PropsType) => (
  <svg
    className={classnames(styles.simple_icon, styles[`simple_icon__${brand}`], className)}
    style={style}
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

export default SimpleIcon;
