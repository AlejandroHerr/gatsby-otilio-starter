import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Footer from '../Footer';

import PostHeader from './PostHeader';
import ProgressControl from '../ProgressControl';
import PostInfo from './PostInfo';
import PostNavigation from './PostNavigation';

import { postPreview, image } from './propTypes';

import styles from './Post.module.scss';

const Post = ({ context, post }) => {
  const { next, prev } = context;

  const {
    author, title, cover, tags, date,
  } = post.frontmatter;

  const coverImage = cover && (cover.childImageSharp.resolutions || cover.childImageSharp.sizes);
  return (
    <div>
      <PostHeader
        author={author}
        date={date}
        title={title}
        image={coverImage}
        timeToRead={post.timeToRead}
      />
      <main>
        <article style={{
              maxWidth: '32em',
              margin: '0 auto',
              padding: '0 2em',
            }}
        >
          <section className={styles.post__content}>
            <ProgressControl>
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </ProgressControl>
          </section>
          <PostInfo tags={tags} />
          <PostNavigation next={next} prev={prev} />
        </article>
      </main>
      <Footer />
    </div>
  );
};

Post.propTypes = {
  context: PropTypes.shape({
    next: postPreview,
    prev: postPreview,
  }).isRequired,
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      author: PropTypes.string.isRequired,
      cover: image,
      date: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      title: PropTypes.string.isRequired,
    }).isRequired,
    html: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
  }).isRequired,
};


export default Post;
