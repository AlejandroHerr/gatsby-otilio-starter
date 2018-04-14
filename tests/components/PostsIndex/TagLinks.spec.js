import React from 'react';
import { shallow } from 'enzyme';
import GatsbyLink from 'gatsby-link';

import TagLinks from '../../../src/components/PostsIndex/TagLinks';

const defaultProps = {
  tags: ['tag1', 'tag2', 'tag3'],
};

const setup = (props = {}) => {
  const tagLinks = shallow(<TagLinks {...defaultProps} {...props} />);

  return {
    tagLinks,
    link: tagLinks.find(GatsbyLink),
  };
};

describe('PostsIndex', () => {
  describe('TagLinks', () => {
    it('should render a link to the tag page for every tag', () => {
      const { tagLinks, link } = setup();


      expect(link).toHaveLength(defaultProps.tags.length);
      defaultProps.tags.forEach((tag, idx) => {
        expect(link.at(idx).prop('to')).toBe(`tag/${tag}`);
        expect(link.at(idx).prop('children')).toBe(tag);
      });
      expect(tagLinks).toMatchSnapshot();
    });
  });
});
