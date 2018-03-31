import React from 'react';
import renderer from 'react-test-renderer';

import Navigation from '../../../src/components/Post/Navigation';

const next = {
  excerpt: 'prevExcerpt',
  path: 'prevPath',
  title: 'prevTitle',
};

const prev = {
  excerpt: 'prevExcerpt',
  path: 'prevPath',
  title: 'prevTitle',
};

describe('Post', () => {
  describe('Navigation', () => {
    it('should match the exact snapshot with prev and next', () => {
      const tree = renderer.create(<Navigation next={next} prev={prev} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should match the exact snapshot with prev', () => {
      const tree = renderer.create(<Navigation prev={prev} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should match the exact snapshot with next', () => {
      const tree = renderer.create(<Navigation next={next} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should match the exact snapshot with none', () => {
      const tree = renderer.create(<Navigation />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
