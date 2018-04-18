// @flow
import React from 'react';
import classnames from 'classnames';

import type { SizeImageSharpType } from '../../types/gatsby';

import HeroHeader from '../HeroHeader';

import styles from './TagIndex.module.scss';

type PropsType = {
  image?: ?SizeImageSharpType,
  title: string,
  total: number,
};

const MainHeader = ({
  image, title, total,
}: PropsType) => (
  <HeroHeader
    className={classnames(styles.tag_index_header, {
      [styles['tag_index_header--has_image']]: !!image,
    })}
    image={image}
  >
    <h1
      className={classnames(styles.tag_index_header__title, {
          [styles['tag_index_header__title--has_image']]: !!image,
        })}
    >
      {title}
    </h1>
    <span
      className={classnames(styles.tag_index_header__body, {
          [styles['tag_index_header__body--has_image']]: !!image,
        })}
    >
      {`${total} posts in this category`}
    </span>
  </HeroHeader>
);


MainHeader.defaultProps = {
  image: null,
};

export default MainHeader;
