import React from 'react';
import { shallow } from 'enzyme';

import TagIndex from '../../../src/components/TagIndex/';
import Header from '../../../src/components/TagIndex/Header';
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
    additionalContext: {
      tag: 'Test Tag',
      total: 10,
    },
  },
};

const setup = (props = {}) => {
  const tagIndex = shallow(<TagIndex {...defaultProps} {...props} />);

  return {
    tagIndex,
    header: tagIndex.find(Header),
    article: tagIndex.find(Article),
    pagination: tagIndex.find(Pagination),
  };
};

describe('TagIndex', () => {
  it('should render a TagIndex', () => {
    const {
      tagIndex, header, article, pagination,
    } = setup();

    expect(header).toHaveLength(1);
    expect(article).toHaveLength(defaultProps.pathContext.group.length);
    expect(pagination).toHaveLength(1);
    expect(tagIndex).toMatchSnapshot();
  });
  it('should render a TagIndex with cover', () => {
    const sizes = {
      src: 'testSrc',
    };
    const {
      tagIndex, header, article, pagination,
    } = setup({
      pathContext: {
        ...defaultProps.pathContext,
        additionalContext: {
          ...defaultProps.pathContext.additionalContext,
          cover: {
            sizes,
          },
        },
      },
    });

    expect(header).toHaveLength(1);
    expect(header.prop('image')).toBe(sizes);
    expect(article).toHaveLength(defaultProps.pathContext.group.length);
    expect(pagination).toHaveLength(1);
    expect(tagIndex).toMatchSnapshot();
  });
});
