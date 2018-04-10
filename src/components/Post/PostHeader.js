// @flow
import React from 'react';
import classnames from 'classnames';
import Link from 'gatsby-link';

import type { SizeImageSharpType } from '../../types/gatsby';

import ByteIcon from '../icons/ByteIcon';
import HeroHeader from '../HeroHeader';

import styles from './Post.module.scss';

type PropsType = {
  author: string,
  date: string,
  image?: ?SizeImageSharpType,
  title: string,
  timeToRead: number,
};

const getDisplayDate = date => date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

const PostHeader = ({
  author, date, image, title, timeToRead,
}: PropsType) => {
  const postDate = new Date(date);
  return (
    <HeroHeader image={image}>
      <h1 className={classnames(styles.post_header__title, { [styles['post_header__title--has_image']]: !!image })}>
        {title}
      </h1>
      <span className={classnames(styles.post_header__body, { [styles['post_header__body--has_image']]: !!image })}>
        <Link className={classnames(styles.post_header__author, { [styles['post_header__author--has_image']]: !!image })} to="/">{author}</Link>
        {' | '}
        <span><ByteIcon icon="clock" bold /> {timeToRead}</span>
        {' | '}
        <time dateTime={postDate.toISOString()}>{getDisplayDate(postDate)}</time>
      </span>
    </HeroHeader>
  );
};


PostHeader.defaultProps = {
  image: null,
};

export default PostHeader;
