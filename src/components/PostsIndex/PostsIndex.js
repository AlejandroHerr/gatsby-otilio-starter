// @flow
import React from 'react';

import type { PathContextType, SiteInfoType } from '../../types/postsIndex';

import Header from './Header';
import Article from './Article';
import Pagination from './Pagination';

type PropsType = {
  pathContext: PathContextType,
  siteInfo: SiteInfoType,
};

const PostsIndex = ({ siteInfo, pathContext }: PropsType) => {
  const {
    group: posts,
    first,
    last,
    index,
    pageCount,
    pathPrefix,
  } = pathContext;

  return (
    <div>
      <Header
        image={siteInfo.cover.childImageSharp.sizes}
        title={siteInfo.title}
        description={siteInfo.shortDescription}
      />
      <main role="main">
        {posts.map(article => (
          <Article
            key={article.slug}
            article={article}
          />
        ))}
        <Pagination
          first={first}
          last={last}
          index={index}
          pageCount={pageCount}
          pathPrefix={pathPrefix}
        />
      </main>
    </div>
  );
};

export default PostsIndex;
