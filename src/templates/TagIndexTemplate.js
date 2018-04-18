// @flow
import React from 'react';
import Helmet from 'react-helmet';

import TagIndex from '../components/TagIndex';

import type { ChildDataJsonType } from '../types/gatsby';
import type { PathContextType, SiteInfoType } from '../types/tagIndex';

type PropsType = {
  data: {
    siteInfo: ChildDataJsonType<SiteInfoType>,
  },
  pathContext: PathContextType,
};

const PostsIndexTemplate = (props: PropsType) => {
  const { data, pathContext } = props;
  const {
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;

  return (
    <div>
      <Helmet title={siteInfo.title} />
      <TagIndex pathContext={pathContext} siteInfo={siteInfo} />
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
            sizes(maxWidth: 2880) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
