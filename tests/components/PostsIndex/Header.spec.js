import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/components/PostsIndex/Header';
import HeroHeader from '../../../src/components/HeroHeader';

const defaultProps = {
  description: 'Test description',
  title: 'Test title',
  url: 'Test url',
};

const setup = (props = {}) => {
  const header = shallow(<Header {...defaultProps} {...props} />);

  return {
    header,
    heroHeader: header.find(HeroHeader),
  };
};

describe('PostsIndex', () => {
  describe('Header', () => {
    it('should render a HeroHeader', () => {
      const { header, heroHeader } = setup();

      expect(heroHeader).toHaveLength(1);
      expect(header).toMatchSnapshot();
    });
  });
});
