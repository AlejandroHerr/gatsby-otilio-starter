// @flow
import React from 'react';
import classnames from 'classnames';

import styles from './ByteIcon.module.scss';

type PropsType = {
  bold?: boolean,
  className?: string,
  icon: string,
};

const ByteIcon = ({ bold, className, icon }: PropsType) => (
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

export default ByteIcon;
