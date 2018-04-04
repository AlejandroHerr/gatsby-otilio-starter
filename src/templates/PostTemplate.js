import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Post from '../components/Post';

import {
  authorType,
  siteInfoType,
  postType,
  postPreviewType,
  socialSummaryType,
} from '../propTypes/post';

const PostTemplate = ({ data, pathContext }) => {
  const {
    author: {
      childDataJson: author,
    },
    post,
    siteInfo: {
      childDataJson: siteInfo,
    },
    socialSummary,
  } = data;

  return (
    <div>
      <Helmet title={`${post.frontmatter.title} | ${siteInfo.title}`}>
        <meta property="og:url" content={`${siteInfo.url}${post.fields.slug}`} />
        <meta property="og:title" content={socialSummary.frontmatter.title} />
        <meta property="og:description" content={socialSummary.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={socialSummary.frontmatter.image && `${siteInfo.url}${socialSummary.frontmatter.image.childImageSharp.resolutions.src}`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={socialSummary.frontmatter.title} />
        <meta name="twitter:description" content={socialSummary.description} />
        <meta name="twitter:image" content={socialSummary.frontmatter.image && `${siteInfo.url}${socialSummary.frontmatter.image.childImageSharp.resolutions.src}`} />
      </Helmet>
      <Post
        author={author}
        navigation={pathContext}
        post={post}
        siteInfo={siteInfo}
      />
    </div>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.shape({
    author: PropTypes.shape({
      childDataJson: authorType.isRequired,
    }).isRequired,
    post: postType.isRequired,
    siteInfo: PropTypes.shape({
      childDataJson: siteInfoType.isRequired,
    }).isRequired,
    socialSummary: socialSummaryType.isRequired,
  }).isRequired,
  pathContext: PropTypes.shape({
    next: postPreviewType,
    prev: postPreviewType,
  }).isRequired,
};

export default PostTemplate;

/* eslint-disable */
export const postQuery = graphql`
  query postByPath($slug: String!) {
    author: file(relativePath: { eq: "author.json" }) {
      childDataJson {
        name
        about
        location
        social {
          service
          url
        }
        avatar {
          childImageSharp {
            sizes(maxWidth: 200) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      timeToRead
      fields {
        slug
      }
      frontmatter {
        author
        title
        date
        tags
        cover {
          childImageSharp {
            sizes(maxWidth: 2880) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
        title,
      }
    }
    socialSummary: markdownRemark(fields: { slug: { eq: $slug } }) {
      description: excerpt
      fields {
        slug
      }
      frontmatter {
        title
        image: cover {
          childImageSharp {
            resolutions(width: 1200, height: 620) {
              src
            }
          }
        }
      }
    }
  }
`;
