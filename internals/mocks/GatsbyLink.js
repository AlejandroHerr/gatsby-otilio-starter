/* eslint-disable */
import React from 'react';

const GatsbyLink = ({ children, className, to }) => (
  <a className={className} href={to}>
    {children}
  </a>
);

export default GatsbyLink;
