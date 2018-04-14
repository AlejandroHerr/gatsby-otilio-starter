import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GatsbyLink from 'gatsby-link';

import Article from '../../../src/components/PostsIndex/Article';

const defaultProps = {
  article: {
    author: 'testAuthor',
    date: '2018-04-30T05:00:00.000Z',
    excerpt: 'Excerpt test',
    slug: 'test',
    title: 'testTitle',
  },
};

const setup = (props = {}) => {
  const article = shallow(<Article {...defaultProps} {...props} />);

  return {
    article,
    link: article.find(GatsbyLink),
  };
};

describe('PostsIndex', () => {
  describe('Article', () => {
    it('should render an article link', () => {
      const { article, link } = setup();

      expect(link).toHaveLength(1);
      expect(link.first().prop('to')).toBe(defaultProps.article.slug);
      expect(article).toMatchSnapshot();
    });
    it('should render an article link with tags', () => {
      const props = {
        article: {
          ...defaultProps.article,
          tags: ['test1', 'test2'],
        },
      };
      const tree = renderer.create(<Article {...props} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
