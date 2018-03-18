import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostInfo from './PostInfo';
import PostNavigation from './PostNavigation';

import { postPreview, image } from './PropTypes';


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
        date={new Date(date)}
        title={title}
        image={coverImage}
        timeToRead={post.timeToRead}
      />
      <main>
        <article>
          <div style={{
              maxWidth: '32em',
              margin: '0 auto',
              padding: '0 2em',
            }}
          >
            <PostContent html={post.html} />
            <PostInfo tags={tags} />
            <PostNavigation next={next} prev={prev} />
          </div>
        </article>
      </main>
      <footer id="footer">
        <div className="inner">
          <section className="credits">
            <span className="credits-theme">Theme <a href="https://github.com/zutrinken/attila">Attila</a> by <a href="http://zutrinken.com" rel="nofollow">zutrinken</a></span>
            <span className="credits-software">Published with <a href="http://ghost.org">Ghost</a></span>
          </section>
        </div>
      </footer>
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
