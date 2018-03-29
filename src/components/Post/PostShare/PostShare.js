import React from 'react';
import PropTypes from 'prop-types';
import { FacebookShareButton } from 'react-share';
import SimpleIcon from '../../icons/SimpleIcon';

import styles from './PostShare.module.scss';

const PostShare = ({ path, url }) => console.log('postshare', path, url, `${url}${path}`) || (
  <div className={styles.post_share}>
    <FacebookShareButton url={`${url}${path}`} className={styles.post_share__button}>
      <SimpleIcon brand="facebook" className={styles.post_share__facebook} />
    </FacebookShareButton>
  </div>
);

PostShare.defaultProps = {
  path: '',
};

PostShare.propTypes = {
  path: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default PostShare;
