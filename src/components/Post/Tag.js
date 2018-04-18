// @flow
import React from 'react';
import Link from 'gatsby-link';

import styles from './Post.module.scss';

const Tag = ({ tag }: {tag: string}) => (
  <Link
    className={styles.post_tags__tag}
    to={`/tags/${tag.toLowerCase().replace(' ', '')}`}
  >
    {tag}
  </Link>
);

export default Tag;
