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
    index,
    pageCount,
    pathPrefix,
  } = pathContext;

  return (
    <div>
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

export default PostsIndex;
