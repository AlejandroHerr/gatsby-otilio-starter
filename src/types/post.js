// @flow
import type { ChildImageSharpType } from './gatsby';

export type SocialLinkType = {
  service: string,
  url: string,
};

export type AuthorType = {
  about: string,
  avatar: ChildImageSharpType,
  location: string,
  name: string,
  social: Array<SocialLinkType>,
};

export type SiteInfoType = {
  title: string,
  url: string,
};

export type PreviewType = {
  excerpt: string,
  path: string,
  title: string,
};

export type FrontmatterType = {
  author: string,
  cover?: ChildImageSharpType,
  date: string,
  tags?: Array<string>,
  title: string,
};

export type PostType = {
  frontmatter: FrontmatterType,
  html: string,
  timeToRead: number,
  fields: {
    slug: string,
  },
};

export type SocialSummaryType = {
  description: string,
  fields: {
    slug: string,
  },
  frontmatter: {
    title: string,
    image?: {
      childImageSharp: {
        resolutions: {
          src: string,
        },
      },
    },
  },
};
