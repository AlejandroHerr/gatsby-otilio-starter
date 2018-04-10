// @flow
import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
} from 'react-share';

import FacebookIcon from './shareIcons/FacebookIcon';
import LinkedinIcon from './shareIcons/LinkedinIcon';
import TwitterIcon from './shareIcons/TwitterIcon';
import WhatsappIcon from './shareIcons/WhatsappIcon';

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
