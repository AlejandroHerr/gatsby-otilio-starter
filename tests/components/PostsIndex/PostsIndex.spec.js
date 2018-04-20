import React from 'react';
import { shallow } from 'enzyme';

import PostsIndex from '../../../src/components/PostsIndex/';
import Header from '../../../src/components/PostsIndex/Header';
import Article from '../../../src/components/PostsIndex/Article';
import Pagination from '../../../src/components/PostsIndex/Pagination';

const defaultProps = {
  pathContext: {
    group: [{
      slug: 'slug1',
    },
    {
      slug: 'slug2',
    }],
    first: true,
    last: false,
    index: 1,
    pageCount: 2,
    pathPrefix: 'prefix',
  },
  siteInfo: {
    shortDescription: 'Test Description',
    cover: {
      childImageSharp: {
        sizes: {
          src: 'testSrc',
        },
      },
    },
    title: 'Test Title',
    url: 'Test Url',
  },
};

const setup = (props = {}) => {
  const postsIndex = shallow(<PostsIndex {...defaultProps} {...props} />);

  return {
    postsIndex,
    header: postsIndex.find(Header),
    article: postsIndex.find(Article),
    pagination: postsIndex.find(Pagination),
  };
};

describe('PostsIndex', () => {
  it('should render a PostsIndex', () => {
    const {
      postsIndex, header, article, pagination,
    } = setup();

    expect(header).toHaveLength(1);
    expect(article).toHaveLength(defaultProps.pathContext.group.length);
    expect(pagination).toHaveLength(1);
    expect(postsIndex).toMatchSnapshot();
  });
});
