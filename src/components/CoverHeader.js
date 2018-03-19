import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import CoverImage from './CoverImage';

import styles from './CoverHeader.module.scss';

const CoverHeader = ({
  description, logo, image, title, url, isPost,
}) => (
  <header className={classnames(styles.coverHeader, {
    [styles['coverHeader--post']]: isPost,
    [styles['coverHeader--hasImage']]: !!image,
  })}
  >
    <div className={styles.coverHeader__inner}>
      <nav className={styles.coverHeader__navigation}>
        {logo
        && (
          <span className={styles.coverHeader__logo}>
            <a href={url}><img src={logo} alt="Blog Logo" /></a>
          </span>
        )}
      </nav>
      <h1 className={styles.coverHeader__name}>
        <a href="/url">{title}</a>
      </h1>
      {description
       && (<span className={styles.coverHeader__description}>{description}</span>)
      }
      {image && (<CoverImage image={image} />)}
    </div>
    {!image && (<div className={styles.coverHeader__after} />)}
  </header>
);


CoverHeader.defaultProps = {
  description: '',
  logo: '',
  image: '',
  title: '',
  url: '',
  isPost: false,
};

CoverHeader.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  isPost: PropTypes.bool,
};

export default CoverHeader;
