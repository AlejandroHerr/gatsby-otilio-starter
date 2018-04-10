// @flow
import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/PostsIndex/Header';
import Article from '../components/PostsIndex/Article';
import Pagination from '../components/PostsIndex/Pagination';

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

  const {
    group: posts,
    index,
    pageCount,
    pathPrefix,
  } = pathContext;

  return (
    <div>
      <Helmet title={siteInfo.title} />
      <Header
        image={siteInfo.cover.childImageSharp.sizes}
        title={siteInfo.title}
        url={siteInfo.url}
        description={siteInfo.description}
      />
      <main role="main">
        {posts.map(article => (
          <Article
            key={article.slug}
            article={article}
          />
        ))}
        <Pagination page={index} pageCount={pageCount} pathPrefix={pathPrefix} />
      </main>
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
