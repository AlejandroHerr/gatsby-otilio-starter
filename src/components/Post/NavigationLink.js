// @flow
import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import type { PreviewType } from '../../types/post';

import ByteIcon from '../icons/ByteIcon';

import styles from './Post.module.scss';

type PropsType = {
  className: string,
  icon: string,
} & PreviewType;

const NavigationLink = ({
  className, icon, excerpt, path, title,
}: PropsType) => (
  <Link
    className={classnames(styles.post_navigation__link, className)}
    to={path}
  >
    <section className={styles.post_navigation__teaser}>
      <div className={styles.post_navigation__icon}>
        <ByteIcon icon={icon} />
      </div>
      <h2 className={styles.post_navigation__title}>{title}</h2>
      <p className={styles.post_navigation__excerpt}>{excerpt}</p>
    </section>
  </Link>
);

export default NavigationLink;
