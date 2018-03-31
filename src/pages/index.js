import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import { siteInfoType } from '../propTypes/index';

import MainHeader from '../components/MainHeader';

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
      {data.allMarkdownRemark.edges.map((post) => {
        if (post.node.frontmatter.path !== '/404/') {
          const title = post.node.frontmatter.title || post.node.path;
          return (
            <div key={post.node.frontmatter.path}>
              <h3
                style={{
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={post.node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{post.node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </div>
          );
        }
        return (<div>Not Found!</div>);
      })}
    </div>
  );
};

Index.propTypes = {
  data: {
    siteInfo: siteInfoType.isRequired,
  },
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
