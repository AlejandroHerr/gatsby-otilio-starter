// @flow
import React, { type Node } from 'react';
import classnames from 'classnames';

import HeroImage from './HeroImage';
import type { SizeImageSharpType } from '../../types/gatsby';

import styles from './HeroHeader.module.scss';

type PropsType = {
  children: Node,
  className?: string,
  image?: ?SizeImageSharpType,
};


const HeroHeader = ({ children, className, image }: PropsType) => (
  <header className={classnames(styles.hero_header, className, { [styles['hero_header--has_image']]: !!image })}>
    <div className={styles.hero_header__inner}>
      {children}
      {image && (
        <HeroImage
          image={image}
        />
      )}
    </div>
  </header>
);

HeroHeader.defaultProps = {
  className: '',
  image: null,
};

export default HeroHeader;
