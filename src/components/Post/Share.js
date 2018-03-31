import React from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton } from 'react-share';
import SimpleIcon from '../icons/SimpleIcon';

import styles from './Post.module.scss';

const Share = ({ path, url }) => (
  <div className={styles.post_share}>
    <FacebookShareButton url={`${url}${path}`} className={styles.post_share__button}>
      <SimpleIcon brand="facebook" className={styles.post_share__facebook} />
    </FacebookShareButton>
  </div>
);

Share.defaultProps = {
  path: '',
};

Share.propTypes = {
  path: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default Share;
