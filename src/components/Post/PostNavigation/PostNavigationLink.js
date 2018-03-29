import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from 'gatsby-link';

import ByteIcon from '../../icons/ByteIcon';

import styles from './PostNavigation.module.scss';

const PostNavigationLink = ({
  className, icon, excerpt, path, title,
}) => (
  <Link
    className={classnames(styles.post_navigation__link, className)}
    to={path}
  >
    <section className={styles.post_navigation__teaser}>
      <div className={styles.post_navigation__icon}>
        <ByteIcon icon={icon} />
      </div>
      <h2 className={styles.post_navigation__title}>{title}</h2>
      <p className={styles.post_navigation__excerpt}>{excerpt}</p>
    </section>
  </Link>
);

PostNavigationLink.propTypes = {
  className: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PostNavigationLink;
