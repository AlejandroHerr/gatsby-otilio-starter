// @flow
import React from 'react';
import Helmet from 'react-helmet';

import TagIndex from '../components/TagIndex';

import type { ChildDataJsonType } from '../types/gatsby';
import type { LocationType, PathContextType, SiteInfoType } from '../types/tagIndex';

type PropsType = {
  data: {
    siteInfo: ChildDataJsonType<SiteInfoType>,
  },
  location: LocationType,
  pathContext: PathContextType,
};

const PostsIndexTemplate = ({ data, pathContext, location }: PropsType) => {
  const {
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;
  const { additionalContext } = pathContext;

  const metaTitle = `${siteInfo.title} | ${additionalContext.tag}`;
  const metaDescription = `Posts about ${additionalContext.tag}. ${siteInfo.description}`;
  const metaImage = additionalContext.cover
    ? `${siteInfo.url}${additionalContext.cover.resolutions.src}`
    : `${siteInfo.url}${siteInfo.cover.childImageSharp.resolutions.src}`;

  return (
    <div>
      <Helmet title={metaTitle}>
        <meta name="description" content={metaDescription} />
        <meta property="og:url" content={`${siteInfo.url}${location.pathname}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="blog" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          key="og_image"
          property="og:image"
          content={metaImage}
        />
        <meta
          key="twitter_image"
          name="twitter:image"
          content={metaImage}
        />
      </Helmet>
      <TagIndex pathContext={pathContext} />
    </div>
  );
};

export default PostsIndexTemplate;

/* eslint-disable */
/* $FlowFixMe */
export const pageQuery = graphql`
  query TagQuery {
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
        title,
        description,
        cover {
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
