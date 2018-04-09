// @flow
import React from 'react';

import type { PreviewType } from '../../types/post';

import NavigationLink from './NavigationLink';

import styles from './Post.module.scss';

const Navigation = ({ next, prev }: {next ?: PreviewType, prev?: PreviewType}) => (
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

export default Navigation;
