import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'gatsby-link';

import ClockIcon from '../icons/ClockIcon';
import CoverImage from '../CoverImage';

import { imageSharp } from './propTypes';

import styles from './PostHeader.module.scss';

const getDisplayDate = date => date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

const PostHeader = ({
  author, date, image, title, timeToRead,
}) => {
  const postDate = new Date(date);
  return (
    <header className={classnames(styles.post_header, { [styles['post_header--has_image']]: !!image })}>
      <div className={styles.post_header__inner}>
        <h1 className={styles.post_header__title}>
          {title}
        </h1>
        <span className={styles.post_header__body}>
          <Link className={styles.post_header__author} to="/">{author}</Link>
          {' | '}
          <span><ClockIcon /> {timeToRead}</span>
          {' | '}
          <time dateTime={postDate.toISOString()}>{getDisplayDate(postDate)}</time>
        </span>
        {image && (
        <CoverImage
          className={styles.post_header__image}
          shadowClassName={styles.post_header__image_shadow}
          image={image}
        />
      )}
      </div>
    </header>
  );
};


PostHeader.defaultProps = {
  image: null,
};

PostHeader.propTypes = {
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: imageSharp,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
};

export default PostHeader;
