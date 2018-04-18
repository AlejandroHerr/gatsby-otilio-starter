import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../../src/components/TagIndex/Header';
import HeroHeader from '../../../src/components/HeroHeader';

const defaultProps = {
  total: 50,
  title: 'Test title',
};

const setup = (props = {}) => {
  const header = shallow(<Header {...defaultProps} {...props} />);

  return {
    header,
    heroHeader: header.find(HeroHeader),
  };
};

describe('TagIndex', () => {
  describe('Header', () => {
    it('should render a HeroHeader', () => {
      const { header, heroHeader } = setup();

      expect(header.find('h1')).toHaveLength(1);
      expect(header.find('h1').text()).toBe(defaultProps.title);
      expect(header.find('span')).toHaveLength(1);
      expect(header.find('span').text()).toBe(`${defaultProps.total} posts in this category`);
      expect(heroHeader).toHaveLength(1);
      expect(header).toMatchSnapshot();
    });
    it('should render a HeroHeader', () => {
      const { header, heroHeader } = setup({
        image: {
          size: {
            src: 'testSrc',
          },
        },
      });

      expect(heroHeader).toHaveLength(1);
      expect(header).toMatchSnapshot();
    });
  });
});
