import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from 'gatsby-image';

import CoverImage from './CoverImage';
import ClockIcon from './icons/ClockIcon';
import styles from './PostHeader.module.scss';

const getDisplayDate = date => date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

const PostHeader = ({
  author, date, image, title, timeToRead,
}) => (
  <header
    className={classnames(styles.post_header, {
      [styles['post_header--has_image']]: !!image,
    })}
  >
    <div className={styles.post_header__inner}>
      <h1
        className={classnames(styles.post_header__title, {
          [styles['post_header__title--has_image']]: !!image,
        })}
      >
        {title}
      </h1>
      <span
        className={classnames(styles.post_header__body, {
          [styles['post_header__body--has_image']]: !!image,
        })}
      >
        <a href="/">{author}</a> | <span><ClockIcon /> {timeToRead}</span> | <time dateTime={date.toISOString()}>{getDisplayDate(date)}</time>
      </span>
      {image && (
        <CoverImage
          className={styles.post_header__image}
          shadowClassName={styles.post_header__image_shadow}
          image={image}
        />
      )}
      {/* image && (
        <Img
          sizes={image}
          style={{
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  }}
        />) */

      }
    </div>
  </header>
);


PostHeader.defaultProps = {
  author: '',
  date: '',
  image: '',
  title: '',
  timeToRead: 0.0,
};

PostHeader.propTypes = {
  author: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  image: PropTypes.string,
  title: PropTypes.string,
  timeToRead: PropTypes.number,
};

export default PostHeader;
