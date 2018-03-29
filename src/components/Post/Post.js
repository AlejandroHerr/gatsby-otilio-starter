/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';

import { authorType, postPreviewType, postType, siteInfoType } from '../../templates/Post.propTypes';

import Footer from '../Footer';
import ProgressControl from '../ProgressControl';

import PostHeader from './PostHeader';
import PostTags from './PostTags';
import PostShare from './PostShare';
import PostAuthor from './PostAuthor';
import PostNavigation from './PostNavigation';

import styles from './Post.module.scss';

const Post = ({
  author, navigation, post, siteInfo,
}) => {
  const { next, prev } = navigation;

  const {
    author: postAuthor, title, cover, tags, date, path,
  } = post.frontmatter;

  const { url } = siteInfo;


  const coverImage = cover && (cover.childImageSharp.resolutions || cover.childImageSharp.sizes);
  return (
    <div>
      <PostHeader
        author={postAuthor}
        date={date}
        title={title}
        image={coverImage}
        timeToRead={post.timeToRead}
      />
      <main>
        <article>
          <div className={styles.post__inner}>
            <section className={styles.post__content}>
              <ProgressControl>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
              </ProgressControl>
            </section>
            <section className={styles.post__info}>
              {tags && tags.length && (<PostTags tags={tags} />)}
              <PostShare path={path} url={url} />
              <div className={styles.post__clear} />
              <PostAuthor author={author} />
              <div className="clear" />
            </section>
            <PostNavigation next={next} prev={prev} />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

Post.propTypes = {
  author: authorType.isRequired,
  navigation: PropTypes.shape({
    next: postPreviewType,
    prev: postPreviewType,
  }).isRequired,
  post: postType.isRequired,
  siteInfo: siteInfoType.isRequired,
};


export default Post;
