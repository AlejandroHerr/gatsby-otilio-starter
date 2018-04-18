// @flow
import type { ChildImageSharpType, SizeImageSharpType } from './gatsby';
import type { ArticleType } from './postsIndex';

export type PaginationType = {
  first: boolean,
  last: boolean,
  index: number,
  pageCount: number,
  pathPrefix: string,
};

export type AdditionalContextType = {
  cover?: {
    sizes: SizeImageSharpType,
  },
  tag: string,
  total: number,
};

export type PathContextType = {
  group: Array<ArticleType>,
  additionalContext: AdditionalContextType,
} & PaginationType;

export type SiteInfoType = {
  title: string,
  url: string,
  description: string,
  cover: ChildImageSharpType,
};
