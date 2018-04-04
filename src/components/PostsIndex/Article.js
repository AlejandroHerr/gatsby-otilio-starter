import React from 'react';
import Link from 'gatsby-link';

import { articleType } from '../../propTypes/postsIndex';

import styles from './PostsIndex.module.scss';

const getDisplayDate = date => date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

const Article = ({ article }) => {
  const {
    author,
    date,
    excerpt,
    slug,
    tags,
    title,
  } = article;

  const postDate = new Date(date);

  return (
    <article className={styles.posts_index_article}>
      <div className={styles.posts_index_article__inner}>
        <header className="post-header">
          <h2 className={styles.posts_index_article__title}>
            <Link
              className={styles.posts_index_article__title__link}
              to={slug}
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
  article: articleType.isRequired,
};

export default Article;
