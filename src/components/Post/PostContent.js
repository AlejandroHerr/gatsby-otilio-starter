import React from 'react';
import PropTypes from 'prop-types';

import ProgressControl from './ProgressControl';

import styles from './PostContent.module.scss';

const PostContent = ({ html }) => (
  <section className={styles.blog_post__content}>
    <ProgressControl>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </ProgressControl>
  </section>
);


PostContent.propTypes = {
  html: PropTypes.string.isRequired,
};

export default PostContent;
