import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { articleType, siteInfoType } from '../propTypes/index';

import MainHeader from '../components/MainHeader';
import Article from '../components/PostsIndex/Article';

const Index = ({ data }) => {
  const {
    posts: {
      edges: posts,
    },
    siteInfo: {
      childDataJson: siteInfo,
    },
  } = data;

  return (
    <div>
      <Helmet title={siteInfo.title} />
      <MainHeader
        image={siteInfo.cover.childImageSharp.sizes}
        title={siteInfo.title}
        url={siteInfo.url}
        description={siteInfo.description}
      />
      {posts.map(({ node: article }) => (
        <Article
          key={article.frontmatter.path}
          article={article}
        />
      ))}
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: articleType.isRequired,
      })).isRequired,
    }).isRequired,
    siteInfo: PropTypes.shape({
      childDataJson: siteInfoType.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Index;


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
    posts: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 300)
          frontmatter {
            author
            path
            date(formatString: "DD MMMM, YYYY")
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
