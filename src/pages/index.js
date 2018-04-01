import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { siteInfoType } from '../propTypes/index';

import MainHeader from '../components/MainHeader';
import Article from '../components/PostsIndex/Article';

const Index = ({ data, ...props }) => {
  console.log(data, props);
  const {
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
      {data.posts.edges.map((post) => {
        if (post.node.frontmatter.path !== '/404/') {
          return (
            <Article post={post.node.frontmatter} excerpt={post.node.excerpt} />
          );
        }
        return (<div>Not Found!</div>);
      })}
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.shape({
    siteInfo: siteInfoType.isRequired,
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
        }
      }
    }
  }
`;
