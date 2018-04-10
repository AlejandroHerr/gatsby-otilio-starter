// @flow
import React from 'react';

import PostTag from './Tag';

import styles from './Post.module.scss';

const Tags = ({ tags }: { tags: Array<string>}) => (
  <aside className={styles.post_tags}>
    {tags.map(tag => <PostTag key={tag} tag={tag} />)}
  </aside>
);

export default Tags;
