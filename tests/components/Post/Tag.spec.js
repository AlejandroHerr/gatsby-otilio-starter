import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import Tag from '../../../src/components/Post/Tag';

const defaultProps = {
  tag: 'test tag',
};

const setup = (props = {}) => {
  const tag = shallow(<Tag {...defaultProps} {...props} />);

  return {
    tag,
    link: tag.find(Link),
  };
};

describe('Post', () => {
  describe('Tag', () => {
    it('should match the exact snapshot', () => {
      const { tag, link } = setup();

      expect(link).toHaveLength(1);
      expect(link.prop('children')).toBe(defaultProps.tag);
      expect(link.prop('to')).toBe(`/tags/${defaultProps.tag.toLowerCase().replace(' ', '')}`);
      expect(tag).toMatchSnapshot();
    });
  });
});
