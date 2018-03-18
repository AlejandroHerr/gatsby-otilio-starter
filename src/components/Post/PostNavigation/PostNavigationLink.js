import React from 'react';
import PropTypes from 'prop-types';

import classnames from 'classnames';

import styles from './PostNavigation.module.scss';

const PostNavigationLink = ({
  className, icon: IconComponent, excerpt, path, title,
}) => (
  <a
    className={classnames(styles.post_navigation__link, className)}
    href={path}
  >
    <section className={styles.post_navigation__teaser}>
      <div className={styles.post_navigation__icon}>
        <IconComponent />
      </div>
      <h2 className={styles.post_navigation__title}>{title}</h2>
      <p className={styles.post_navigation__excerpt}>{excerpt}</p>
    </section>
  </a>
);

PostNavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.func.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostNavigationLink;
