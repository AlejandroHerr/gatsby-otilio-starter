// @flow
/* eslint-disable react/no-danger */
import React from 'react';

import type { AuthorType, PreviewType, SiteInfoType, PostType } from '../../types/post';

import ProgressControl from '../ProgressControl';

import PostHeader from './PostHeader';
import Tags from './Tags';
import Share from './Share';
import Author from './Author';
import Navigation from './Navigation';

import styles from './Post.module.scss';

type PropsType = {
  author: AuthorType,
  siteInfo: SiteInfoType,
  post: PostType,
  navigation: {
    prev?: PreviewType,
    next?: PreviewType,
  },
};

const Post = ({
  author, navigation, post, siteInfo,
}: PropsType) => {
  const { next, prev } = navigation;
  const {
    slug: path,
  } = post.fields;
  const {
    author: postAuthor, title, cover, tags, date,
  } = post.frontmatter;

  const { url } = siteInfo;

  return (
    <div>
      <PostHeader
        author={postAuthor}
        date={date}
        title={title}
        image={cover && cover.childImageSharp.sizes}
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
              <Share path={path} url={url} />
              {tags && tags.length && (<Tags tags={tags} />)}
              <div className={styles.post__clear} />
              <Author author={author} />
              <div className="clear" />
            </section>
            <Navigation next={next} prev={prev} />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
