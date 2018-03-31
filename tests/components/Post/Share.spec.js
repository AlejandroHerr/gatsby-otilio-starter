import React from 'react';
import renderer from 'react-test-renderer';

import Share from '../../../src/components/Post/Share';

const defaultProps = {
  path: 'testPath',
  url: 'testUrl',
};

describe('Post', () => {
  describe('Share', () => {
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<Share {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
