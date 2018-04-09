// @flow
import React from 'react';
import Img from 'gatsby-image';

import type { AuthorType } from '../../types/post';

import ByteIcon from '../icons/ByteIcon';
import SocialLink from './SocialLink';

import styles from './Post.module.scss';

const Author = ({ author }: {author: AuthorType}) => (
  <aside className={styles.post_author}>
    <figure className={`${styles.post_author__avatar} ${styles.avatar}`}>
      <Img sizes={author.avatar.childImageSharp.sizes} />
    </figure>
    <div className={styles.post_author__bio}>
      <h4 className={styles.post_author__name}>{author.name}</h4>
      <p className={styles.post_author__about}>{author.about}</p>
      <span className={styles.post_author__location}>
        <ByteIcon className={styles.post_author__location_icon} icon="location" /> {author.location}
      </span>
      {author.social.map(({ service, url }) => (
        <SocialLink key={service} service={service} url={url} />
      ))}
    </div>
  </aside>
);

export default Author;
