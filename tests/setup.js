/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('gatsby-link', () => props => (<a {...props} />));
