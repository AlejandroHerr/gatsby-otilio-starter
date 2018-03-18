import React from 'react';
import PropTypes from 'prop-types';

import PostTag from './PostTag';

import styles from './PostTags.module.scss';

const PostTags = ({ tags }) => (
  <aside className={styles.post_tags}>
    {tags.map(tag => <PostTag key={tag} tag={tag} />)}
  </aside>
);

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PostTags;
