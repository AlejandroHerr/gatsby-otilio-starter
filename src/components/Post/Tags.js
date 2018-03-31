import React from 'react';
import PropTypes from 'prop-types';

import PostTag from './Tag';

import styles from './Post.module.scss';

const Tags = ({ tags }) => (
  <aside className={styles.post_tags}>
    {tags.map(tag => <PostTag key={tag} tag={tag} />)}
  </aside>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Tags;
