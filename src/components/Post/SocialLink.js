import React from 'react';
import PropTypes from 'prop-types';

import SimpleIcon from '../icons/SimpleIcon';

import styles from './Post.module.scss';

const SocialLink = ({ service, url }) => (
  <a className={styles.post_author__social} href={url}>
    <SimpleIcon brand={service.toLowerCase()} className={styles.post_author__social_icon} />
  </a>
);

SocialLink.propTypes = {
  service: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default SocialLink;
