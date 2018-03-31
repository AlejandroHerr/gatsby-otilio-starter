import React from 'react';
import renderer from 'react-test-renderer';

import Tag from '../../../src/components/Post/Tag';

const defaultProps = {
  tag: 'test',
};

describe('Post', () => {
  describe('Tag', () => {
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<Tag {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
