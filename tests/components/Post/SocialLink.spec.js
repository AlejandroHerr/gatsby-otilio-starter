import React from 'react';
import renderer from 'react-test-renderer';

import SocialLink from '../../../src/components/Post/SocialLink';

const defaultProps = {
  service: 'Test_Service',
  url: 'test:url',
};

describe('Post', () => {
  describe('SocialLink', () => {
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<SocialLink {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
