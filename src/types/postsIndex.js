// @flow
import type { ChildImageSharpType } from './gatsby';

export type ArticleType = {
  author: string,
  date: string,
  excerpt: string,
  slug: string,
  tags?: Array<string>,
  title: string,
};

export type PaginationType = {
  first: boolean,
  last: boolean,
  index: number,
  pageCount: number,
  pathPrefix: string,
};

export type PathContextType = {
  group: Array<ArticleType>,
} & PaginationType;

export type SiteInfoType = {
  title: string,
  url: string,
  description: string,
  cover: ChildImageSharpType,
};
