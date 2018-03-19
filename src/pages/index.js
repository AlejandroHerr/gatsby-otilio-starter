import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import MainHeader from '../components/MainHeader';

const BlogIndex = ({ data }) => (
  <div>
    <Helmet title="siteTitle Helmet" />
    <MainHeader
      image={data.cover.childImageSharp.sizes}
      title="Misterious Lively Alejandro"
      url=""
      description="Yes. The title was randomly generated"
    />
    {data.allMarkdownRemark.edges.posts.map((post) => {
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

export default BlogIndex;


/* eslint-disable */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    cover: file(relativePath: { eq: "cover.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2880) {
          ...GatsbyImageSharpSizes_withWebp
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
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
