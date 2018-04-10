// @flow
import React from 'react';
import Link from 'gatsby-link';

import styles from './Post.module.scss';

const Tag = ({ tag }: {tag: string}) => (
  <Link className={styles.post_tags__tag} to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
);

export default Tag;
