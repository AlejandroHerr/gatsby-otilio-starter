// @flow
import React from 'react';

import type { PathContextType, SiteInfoType } from '../../types/tagIndex';

import Header from './Header';
import Article from '../PostsIndex/Article';
import Pagination from '../PostsIndex/Pagination';

type PropsType = {
  pathContext: PathContextType,
  siteInfo: SiteInfoType,
};

const TagIndex = ({ siteInfo, pathContext }: PropsType) => {
  const {
    group: posts,
    first,
    last,
    index,
    pageCount,
    pathPrefix,
    additionalContext,
  } = pathContext;

  return (
    <div>
      <Header
        image={additionalContext.cover && additionalContext.cover.sizes}
        title={additionalContext.tag}
        total={additionalContext.total}
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

export default TagIndex;
