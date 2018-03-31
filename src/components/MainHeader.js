import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CoverImage from './CoverImage';

import styles from './MainHeader.module.scss';

const MainHeader = ({
  description, image, title, url,
}) => (
  <header
    className={classnames(styles.main_header, {
      [styles['main_header--has_image']]: !!image,
    })}
  >
    <div className={styles.main_header__inner}>
      <h1
        className={classnames(styles.main_header__title, {
          [styles['main_header__title--has_image']]: !!image,
        })}
      >
        <a className={styles.main_header__title_link} href={url}>{title}</a>
      </h1>
      <span
        className={classnames(styles.main_header__body, {
          [styles['main_header__body--has_image']]: !!image,
        })}
      >{description}
      </span>
      {image && (
        <CoverImage
          className={styles.main_header__image}
          shadowClassName={styles.main_header__image_shadow}
          image={image}
        />
      )}
    </div>
    <div className={styles.main_header__after} />
  </header>
);


MainHeader.defaultProps = {
  description: '',
  image: '',
  title: '',
  url: '',
};

MainHeader.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

export default MainHeader;
