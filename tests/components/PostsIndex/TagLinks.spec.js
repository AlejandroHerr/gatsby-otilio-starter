import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import TagLinks from '../../../src/components/PostsIndex/TagLinks';

const defaultProps = {
  tags: [{
    tag: 'Tag 1',
    tagSlug: 'tag1',
  }, {
    tag: 'Tag 2',
    tagSlug: 'tag2',
  }],
};

const setup = (props = {}) => {
  const tagLinks = shallow(<TagLinks {...defaultProps} {...props} />);

  return {
    tagLinks,
    link: tagLinks.find(Link),
  };
};

describe('PostsIndex', () => {
  describe('TagLinks', () => {
    it('should render a link to the tag page for every tag', () => {
      const { tagLinks, link } = setup();


      expect(link).toHaveLength(defaultProps.tags.length);
      defaultProps.tags.forEach(({ tag, tagSlug }, idx) => {
        expect(link.at(idx).prop('to')).toBe(`/tags/${tagSlug}`);
        expect(link.at(idx).prop('children')).toBe(tag);
      });
      expect(tagLinks).toMatchSnapshot();
    });
  });
});
