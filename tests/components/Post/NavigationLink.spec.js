import React from 'react';
import { shallow } from 'enzyme';
import Link from 'gatsby-link';

import NavigationLink from '../../../src/components/Post/NavigationLink';

const defaultProps = {
  className: 'testClassName',
  icon: 'testIcon',
  excerpt: 'testExcerpt',
  path: 'testPath',
  title: 'testTitle',
};

const setup = (props = {}) => {
  const navigationLink = shallow(<NavigationLink {...defaultProps} {...props} />);

  return {
    navigationLink,
    link: navigationLink.find(Link),
  };
};

describe('Post', () => {
  describe('NavigationLink', () => {
    it('should render a NavigationLink with a Gatsby Link', () => {
      const { navigationLink, link } = setup();

      expect(link).toHaveLength(1);
      expect(link.prop('to')).toBe(defaultProps.path);
      expect(navigationLink).toMatchSnapshot();
    });
  });
});
