import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './Post.module.scss';

const Tag = ({ tag }) => (
  <Link className={styles.post_tags__tag} to={`/tags/${tag.toLowerCase()}`}>{tag}</Link>
);

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
};

export default Tag;
