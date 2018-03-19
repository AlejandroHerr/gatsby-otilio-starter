import React from 'react';
import ByteIcon from './ByteIcon';

const ClockIcon = props => (
  <ByteIcon {...props}>
    <circle cx="16" cy="16" r="14" />
    <path d="M16 8 L16 16 20 20" />
  </ByteIcon>
);

export default ClockIcon;
