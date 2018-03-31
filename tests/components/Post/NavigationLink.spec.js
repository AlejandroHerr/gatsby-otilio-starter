import React from 'react';
import renderer from 'react-test-renderer';

import NavigationLink from '../../../src/components/Post/NavigationLink';

const defaultProps = {
  className: 'testClassName',
  icon: 'testIcon',
  excerpt: 'testExcerpt',
  path: 'testPath',
  title: 'testTitle',
};

describe('Post', () => {
  describe('NavigationLink', () => {
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<NavigationLink {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
