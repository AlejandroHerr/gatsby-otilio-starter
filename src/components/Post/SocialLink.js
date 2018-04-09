// @flow
import React from 'react';

import type { SocialLinkType } from '../../types/post';

import SimpleIcon from '../icons/SimpleIcon';

import styles from './Post.module.scss';

const SocialLink = ({ service, url }: SocialLinkType) => (
  <a className={styles.post_author__social} href={url}>
    <SimpleIcon brand={service.toLowerCase()} className={styles.post_author__social_icon} />
  </a>
);

export default SocialLink;
