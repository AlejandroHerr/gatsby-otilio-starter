import React from 'react';
import PropTypes from 'prop-types';

import '../global.scss';

const Template = ({ children }) => (
  <div>{children()}</div>
);

Template.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Template;
