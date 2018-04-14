import React from 'react';
import { shallow } from 'enzyme';

import Post from '../../../src/components/Post/';
import PostHeader from '../../../src/components/Post/PostHeader';
import ProgressControl from '../../../src/components/ProgressControl';
import Share from '../../../src/components/Post/Share';
import Tags from '../../../src/components/Post/Tags';
import Author from '../../../src/components/Post/Author';
import Navigation from '../../../src/components/Post/Navigation';

const defaultProps = {
  siteInfo: {
    url: 'siteInfo.url',
  },
  post: {
    fields: {
      slug: 'slug',
    },
    frontmatter: {
      author: 'autor',
      title: 'title',
      date: '1',
    },
  },
  author: {},
  navigation: {},
};

const setup = (props = {}) => {
  const post = shallow(<Post {...defaultProps} {...props} />);

  return {
    post,
    postHeader: post.find(PostHeader),
    progressControl: post.find(ProgressControl),
    share: post.find(Share),
    tags: post.find(Tags),
    author: post.find(Author),
    navigation: post.find(Navigation),
  };
};

describe('Post', () => {
  it('should render a Post', () => {
    const {
      post, postHeader, progressControl, share, tags, author, navigation,
    } = setup();

    expect(postHeader).toHaveLength(1);
    expect(progressControl).toHaveLength(1);
    expect(share).toHaveLength(1);
    expect(tags).toHaveLength(0);
    expect(author).toHaveLength(1);
    expect(navigation).toHaveLength(1);
    expect(post).toMatchSnapshot();
  });
  it('should render a Post with tags', () => {
    const postProp = {
      ...defaultProps.post,
      frontmatter: {
        ...defaultProps.post.frontmatter,
        tags: ['test1', 'test2'],
      },
    };
    const {
      post, postHeader, progressControl, share, tags, author, navigation,
    } = setup({ post: postProp });

    expect(postHeader).toHaveLength(1);
    expect(progressControl).toHaveLength(1);
    expect(share).toHaveLength(1);
    expect(tags).toHaveLength(1);
    expect(author).toHaveLength(1);
    expect(navigation).toHaveLength(1);
    expect(post).toMatchSnapshot();
  });
  it('should render a PostHeader with cover', () => {
    const postProp = {
      ...defaultProps.post,
      frontmatter: {
        ...defaultProps.post.frontmatter,
        cover: {
          childImageSharp: {
            sizes: { src: 'src' },
          },
        },
      },
    };
    const {
      post, postHeader,
    } = setup({ post: postProp });

    expect(postHeader.prop('image')).toBe(postProp.frontmatter.cover.childImageSharp.sizes);
    expect(post).toMatchSnapshot();
  });
});
