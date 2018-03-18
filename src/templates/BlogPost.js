import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Post from '../components/Post';

const getPostData = post => post.frontmatter || {};

const BlogPostTemplate = (props) => {
  const post = props.data.markdownRemark;
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} description="Some lorem" />
      <Post
        context={props.pathContext}
        post={props.data.markdownRemark}
      />
    </div>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        author: PropTypes.string.isRequired,
        cover: PropTypes.object,
        date: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
      }).isRequired,
      html: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      timeToRead: PropTypes.number.isRequired,
    }),
  }).isRequired,
};


export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      timeToRead
      frontmatter {
        author
        title
        date
        tags
        cover {
          childImageSharp {
            sizes(maxWidth: 1440) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
