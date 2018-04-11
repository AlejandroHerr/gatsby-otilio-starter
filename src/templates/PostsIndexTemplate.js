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
      <Helmet title={siteInfo.title} />
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
        cover {
          childImageSharp {
            sizes(maxWidth: 2880) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
