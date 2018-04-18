// @flow
import React from 'react';
import classnames from 'classnames';

import type { SizeImageSharpType } from '../../types/gatsby';

import HeroHeader from '../HeroHeader';

import styles from './PostsIndex.module.scss';

type PropsType = {
  description: string,
  image: SizeImageSharpType,
  title: string,
};

const MainHeader = ({
  description, image, title,
}: PropsType) => (
  <HeroHeader
    className={classnames(styles.posts_index_header, {
        [styles['posts_index_header--has_image']]: !!image,
      })}
    image={image}
  >
    <h1
      className={classnames(styles.posts_index_header__title, {
          [styles['posts_index_header__title--has_image']]: !!image,
        })}
    >
      {title}
    </h1>
    <span
      className={classnames(styles.posts_index_header__body, {
          [styles['posts_index_header__body--has_image']]: !!image,
        })}
    >
      {description}
    </span>
  </HeroHeader>
);

export default MainHeader;
