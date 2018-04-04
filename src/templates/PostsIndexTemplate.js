import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { pathContextType, siteInfoType } from '../propTypes/postsIndex';

import MainHeader from '../components/MainHeader';
import Article from '../components/PostsIndex/Article';
import Pagination from '../components/PostsIndex/Pagination';

const PostsIndexTemplate = ({ data, pathContext }) => {
  const {
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;

  const {
    group: posts,
    index,
    pageCount,
    pathPrefix,
  } = pathContext;

  return (
    <div>
      <Helmet title={siteInfo.title} />
      <MainHeader
        image={siteInfo.cover.childImageSharp.sizes}
        title={siteInfo.title}
        url={siteInfo.url}
        description={siteInfo.description}
      />
      <main role="main">
        {posts.map(article => (
          <Article
            key={article.slug}
            article={article}
          />
        ))}
        <Pagination page={index} pageCount={pageCount} pathPrefix={pathPrefix} />
      </main>
    </div>
  );
};

PostsIndexTemplate.propTypes = {
  data: PropTypes.shape({
    siteInfo: PropTypes.shape({
      childDataJson: siteInfoType.isRequired,
    }).isRequired,
  }).isRequired,
  pathContext: pathContextType.isRequired,
};

export default PostsIndexTemplate;


/* eslint-disable */
export const pageQuery = graphql`
  query IndexQuery {
    siteInfo: file(relativePath: { eq: "siteInfo.json" }) {
      childDataJson {
        url,
        title,
        description,
        cover {
          childImageSharp {
            sizes(maxWidth: 2880) {
              ...GatsbyImageSharpSizes_withWebp
            }
          }
        }
      }
    }
  }
`;
