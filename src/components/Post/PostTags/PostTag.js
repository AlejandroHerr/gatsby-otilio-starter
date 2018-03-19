import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './PostTags.module.scss';

const PostTag = ({ tag }) => (
  <Link className={styles.post_tags__tag} to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
);

PostTag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default PostTag;
