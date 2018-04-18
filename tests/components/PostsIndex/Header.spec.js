import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/components/PostsIndex/Header';
import HeroHeader from '../../../src/components/HeroHeader';

const defaultProps = {
  description: 'Test description',
  image: {
    size: {
      src: 'testSrc',
    },
  },
  title: 'Test title',
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

      expect(header.find('h1')).toHaveLength(1);
      expect(header.find('h1').text()).toBe(defaultProps.title);
      expect(header.find('span')).toHaveLength(1);
      expect(header.find('span').text()).toBe(defaultProps.description);
      expect(heroHeader).toHaveLength(1);
      expect(header).toMatchSnapshot();
    });
  });
});
