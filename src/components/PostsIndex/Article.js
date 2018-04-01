import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import styles from './PostsIndex.module.scss';

const getDisplayDate = date => date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

const Article = ({ excerpt, post }) => {
  const {
    author, date, title, path, tags,
  } = post;
  const postDate = new Date(date);

  return (
    <article className={styles.posts_index_article}>
      <div className={styles.posts_index_article__inner}>
        <header className="post-header">
          <h2 className={styles.posts_index_article__title}>
            <Link
              className={styles.posts_index_article__title__link}
              to={path}
            >
              {title
              }
            </Link>
          </h2>
          <span className={styles.posts_index_article__meta}>
            {author}
            {tags && ` on ${tags.join(', ')}`}
            {' | '}
            <time dateTime={postDate.toISOString()}>{getDisplayDate(postDate)}</time>
          </span>
          <div className={styles.posts_index_article__clear} />
        </header>
        <section>
          <p className={styles.posts_index_article__excerpt}>{excerpt}</p>
        </section>
      </div>
      <div className={styles.posts_index_article__separator} />
    </article>
  );
};

Article.propTypes = {
  excerpt: PropTypes.string.isRequired,
  post: PropTypes.shape({
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article;
