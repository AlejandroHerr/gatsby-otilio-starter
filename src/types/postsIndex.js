// @flow
import type { ResolutionImageSharpType, SizeImageSharpType } from './gatsby';

export type TagType = {
  tag: string,
  tagSlug: string,
};

export type ArticleType = {
  author: string,
  date: string,
  excerpt: string,
  slug: string,
  tags?: Array<TagType>,
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
  shortDescription: string,
  description: string,
  cover: {
    childImageSharp: {
      sizes: SizeImageSharpType,
      resolutions: ResolutionImageSharpType,
    },
  },
};
