// @flow
import React from 'react';
import Helmet from 'react-helmet';

import Post from '../components/Post';

import type { ChildDataJsonType } from '../types/gatsby';
import type { AuthorType, PreviewType, SiteInfoType, PostType, SocialSummaryType } from '../types/post';

type PropsType = {
  data: {
    author: ChildDataJsonType<AuthorType>,
    siteInfo: ChildDataJsonType<SiteInfoType>,
    post: PostType,
    socialSummary: SocialSummaryType,
  },
  pathContext: {
    prev?: PreviewType,
    next?: PreviewType,
  },
};

const PostTemplate = ({ data, pathContext }: PropsType) => {
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
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={socialSummary.frontmatter.title} />
        <meta name="twitter:description" content={socialSummary.description} />
        {socialSummary.frontmatter.image && [
          <meta
            key="og_image"
            property="og:image"
            content={`${siteInfo.url}${socialSummary.frontmatter.image.childImageSharp.resolutions.src}`}
          />,
          <meta
            key="twitter_image"
            name="twitter:image"
            content={`${siteInfo.url}${socialSummary.frontmatter.image.childImageSharp.resolutions.src}`}
          />,
          ]
        }
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

export default PostTemplate;

/* eslint-disable */
/* $FlowFixMe */
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
