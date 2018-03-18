import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';
import Helmet from 'react-helmet';

import Bio from '../components/Bio';
import MainHeader from '../components/MainHeader';
import cover from './cover.jpg';

const BlogIndex = (props) => {
  const siteTitle = get(props, 'data.site.siteMetadata.title');
  const posts = get(props, 'data.allMarkdownRemark.edges');
  return (
    <div>
      <Helmet title="siteTitle Helmet" />
      <MainHeader
        image={cover}
        title="Misterious Lively Alejandro"
        url=""
        description="Yes. The title was randomly generated"
      />
      <script src="https://gist.github.com/AlejandroHerr/4ac4826298aee85edf67b8cce63825b3.js" />

      {posts.map((post) => {
        if (post.node.frontmatter.path !== '/404/') {
          const title = get(post, 'node.frontmatter.title') || post.node.path;
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

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
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
