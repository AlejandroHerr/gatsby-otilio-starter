import React from 'react';
import PropTypes from 'prop-types';

import NavigationLink from './NavigationLink';

import styles from './Post.module.scss';

const Navigation = ({ next, prev }) => (
  <aside className={styles.post_navigation}>
    {next &&
      <NavigationLink
        className={styles.post_navigation__next}
        icon="chevron_left"
        {...next}
      />
    }
    {prev &&
      <NavigationLink
        className={styles.post_navigation__prev}
        icon="chevron_right"
        {...prev}

      />
    }
    <div className={styles.post_navigation__clear} />
    <div className={styles.post_navigation__separator} />
  </aside>
);

Navigation.defaultProps = {
  next: null,
  prev: null,
};


Navigation.propTypes = {
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

export default Navigation;
