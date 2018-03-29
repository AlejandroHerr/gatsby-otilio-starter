import React from 'react';
import Img from 'gatsby-image';

import { authorType } from '../../../templates/Post.propTypes';

import ByteIcon from '../../icons/ByteIcon';
import SimpleIcon from '../../icons/SimpleIcon';

import styles from './PostAuthor.module.scss';

const PostAuthor = ({ author }) => (
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
        <a key={service} className={styles.post_author__social} href={url}>
          <SimpleIcon brand={service.toLowerCase()} className={styles.post_author__social_icon} />
        </a>
      ))}
    </div>
  </aside>
);

PostAuthor.propTypes = {
  author: authorType.isRequired,
};

export default PostAuthor;
