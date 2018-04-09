// @flow
import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

import styles from './Post.module.scss';

const Share = ({ path, url }: {path?: string, url: string}) => (
  <div className={styles.post_share}>
    <FacebookShareButton url={`${url}${path || ''}`} className={styles.post_share__button}>
      <FacebookIcon size="100%" />
    </FacebookShareButton>
    <LinkedinShareButton url={`${url}${path || ''}`} className={styles.post_share__button}>
      <LinkedinIcon size="100%" />
    </LinkedinShareButton>
    <TwitterShareButton url={`${url}${path || ''}`} className={styles.post_share__button}>
      <TwitterIcon size="100%" />
    </TwitterShareButton>
    <WhatsappShareButton url={`${url}${path || ''}`} className={styles.post_share__button}>
      <WhatsappIcon size="100%" />
    </WhatsappShareButton>
  </div>
);

Share.defaultProps = {
  path: '',
};

export default Share;
