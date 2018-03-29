import React from 'react';
import PropTypes from 'prop-types';

import PostNavigationLink from './PostNavigationLink';
import styles from './PostNavigation.module.scss';

const PostNavigation = ({ next, prev }) => (
  <aside className={styles.post_navigation}>
    {next &&
      <PostNavigationLink
        className={styles.post_navigation__next}
        icon="chevron_left"
        {...next}
      />
    }
    {prev &&
      <PostNavigationLink
        className={styles.post_navigation__prev}
        icon="chevron_right"
        {...prev}

      />
    }
    <div className={styles.post_navigation__clear} />
    <div className={styles.post_navigation__separator} />
  </aside>
);

PostNavigation.defaultProps = {
  next: null,
  prev: null,
};


PostNavigation.propTypes = {
  next: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
  prev: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
};

export default PostNavigation;
