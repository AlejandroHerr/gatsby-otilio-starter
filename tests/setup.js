/* eslint-disable jsx-a11y/anchor-has-content */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// eslint-disable-next-line global-require
jest.mock('gatsby-link', () => require('../internals/mocks/GatsbyLink'));
