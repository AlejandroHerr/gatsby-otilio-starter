import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import classnames from 'classnames';

import ByteIcon from '../icons/ByteIcon';

import styles from './PostsIndex.module.scss';

const Pagination = ({ page, pageCount, pathPrefix }) => (
  <nav className={styles.posts_index_pagination}>
    <div className={styles.posts_index_pagination__inner}>

      {page > 1 &&
        <Link
          className={classnames(
            styles.posts_index_pagination__link,
            styles.posts_index_pagination__next,
          )}
          to={page > 2 ? `${pathPrefix}/${page - 1}` : '/'}
        >
          <ByteIcon icon="chevron_left" /><span className={styles.posts_index_pagination__label}>Newer Posts</span>
        </Link>
      }
      <span className={styles.posts_index_pagination__info}>{`Page ${page} of ${pageCount}`}</span>
      {page < pageCount &&
        <Link
          className={classnames(
            styles.posts_index_pagination__link,
            styles.posts_index_pagination__prev,
          )}
          to={`${pathPrefix}/${page + 1}`}
        >
          <span className={styles.posts_index_pagination__label}>Older Posts</span><ByteIcon icon="chevron_right" />
        </Link>
      }
      <div className={styles.posts_index_pagination__clear} />
      <div className={styles.posts_index_pagination__separator} />
    </div>
  </nav>
);

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
};

export default Pagination;
