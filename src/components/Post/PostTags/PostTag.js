import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostTags.module.scss';

const PostTag = ({ tag }) => (
  <a className={styles.post_tags__tag} href={`/tags/${tag.toLowerCase()}`}>{tag}</a>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
