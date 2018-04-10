import React from 'react';
import renderer from 'react-test-renderer';

import Article from '../../../src/components/PostsIndex/Article';

const defaultArticle = {
  author: 'testAuthor',
  date: '2018-04-30T05:00:00.000Z',
  excerpt: 'Excerpt test',
  slug: 'test',
  title: 'testTitle',
};

describe('PostsIndex', () => {
  describe('Article', () => {
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<Article article={defaultArticle} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
    it('should match the exact snapshot with tags', () => {
      const props = {
        article: {
          ...defaultArticle,
          post: {
            ...defaultArticle.post,
            tags: ['test1', 'test2'],
          },
        },
      };
      const tree = renderer.create(<Article {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
