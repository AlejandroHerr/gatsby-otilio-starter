// @flow
import React from 'react';
import Link from 'gatsby-link';

import type { TagType } from '../../types/postsIndex';

type PropsType = {
  tags: Array<TagType>,
};

const TagLinks = ({ tags }: PropsType) => (
  <span>{' on '}{tags.map(({ tag, tagSlug }, idx) => (idx < (tags.length - 1)
  ? (
    <span key={tagSlug}>
      <Link to={`/tags/${tagSlug}`}>{tag}</Link>{', '}
    </span>
  )
  : (
    <span key={tag}>
      <Link to={`/tags/${tagSlug}`}>{tag}</Link>
    </span>
  )))}
  </span>
);

export default TagLinks;
