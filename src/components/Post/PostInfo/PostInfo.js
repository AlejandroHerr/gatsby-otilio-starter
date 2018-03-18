import React from 'react';
import PropTypes from 'prop-types';

import PostTags from '../PostTags';

import styles from './PostInfo.module.scss';

const PostInfo = ({ tags }) => (
  <section className={styles.post_info}>
    {tags && tags.length && (<PostTags tags={tags} />)}
  </section>
);

PostInfo.defaultProps = {
  tags: [],
};

PostInfo.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default PostInfo;
