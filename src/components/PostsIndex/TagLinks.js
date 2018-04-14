// @flow
import React from 'react';
import Link from 'gatsby-link';

type PropsType = {
  tags: Array<string>,
};

const TagLinks = ({ tags }: PropsType) => (
  <span>{' on '}{tags.map((tag, idx) => (idx < (tags.length - 1)
  ? (
    <span key={tag}>
      <Link to={`/tags/${tag}`}>{tag}</Link>{', '}
    </span>
  )
  : (
    <span key={tag}>
      <Link to={`/tags/${tag}`}>{tag}</Link>
    </span>
  )))}
  </span>
);

export default TagLinks;
