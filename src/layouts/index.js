import React from 'react';

// import NProgress from '../components/NProgress';

import '../global.scss';

const Template = ({ children }) => (
  <div>
    <div>{children()}</div>
  </div>
);

export default Template;

// <NProgress />
