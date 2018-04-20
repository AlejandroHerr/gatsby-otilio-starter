// @flow
import React from 'react';
import Helmet from 'react-helmet';

import PostsIndex from '../components/PostsIndex';

import type { ChildDataJsonType } from '../types/gatsby';
import type { PathContextType, SiteInfoType } from '../types/postsIndex';

type PropsType = {
  data: {
    siteInfo: ChildDataJsonType<SiteInfoType>,
  },
  pathContext: PathContextType,
};

const PostsIndexTemplate = ({
  data, pathContext,
}: PropsType) => {
  const {
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;

  return (
    <div>
      <Helmet title={siteInfo.title}>
        <meta name="description" content={siteInfo.description} />
        <meta property="og:url" content={siteInfo.url} />
        <meta property="og:title" content={siteInfo.title} />
        <meta property="og:description" content={siteInfo.description} />
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={siteInfo.title} />
        <meta name="twitter:description" content={siteInfo.description} />
        <meta
          key="og_image"
          property="og:image"
          content={siteInfo.cover.childImageSharp.resolutions}
        />
        <meta
          key="twitter_image"
          name="twitter:image"
          content={siteInfo.cover.childImageSharp.resolutions}
        />
      </Helmet>
      <PostsIndex pathContext={pathContext} siteInfo={siteInfo} />
    </div>
  );
};

export default PostsIndexTemplate;


/* eslint-disable */
/* $FlowFixMe */
export const pageQuery = graphql`
  query IndexQuery {
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
        title,
        description,
        shortDescription,
        cover {
          childImageSharp {
            sizes(maxWidth: 2880) {
              ...GatsbyImageSharpSizes_withWebp
            }
            resolutions(width: 1200, height: 620) {
              src
            }
          }
        }
      }
    }
  }
`;
