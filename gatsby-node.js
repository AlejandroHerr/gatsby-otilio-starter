const path = require('path');

const postNavPreview = ({ node }) => {
  const { excerpt, frontmatter } = node;

  return {
    excerpt,
    path: frontmatter.path,
    title: frontmatter.title,
  };
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  const BlogPost = path.resolve('./src/templates/BlogPost.js');

  return new Promise((resolve) => {
    resolve(graphql(`
        {
          site {
            siteMetadata {
              title
              author
            }
          }
          allMarkdownRemark(limit: 1000, sort: { fields: [frontmatter___date] }) {
            edges {
              node {
                excerpt(pruneLength: 100)
                frontmatter {
                  path
                  title
                }
              }
            }
          }
        }
      `));
  })
    .then(result => (result.errors
      ? Promise.reject(result.errors)
      : result))
    .then((result) => {
      const posts = result.data.allMarkdownRemark.edges;

      posts.forEach((edge, idx, edges) => createPage({
        path: edge.node.frontmatter.path,
        component: BlogPost,
        context: {
          prev: (edges[idx - 1] && postNavPreview(edges[idx - 1])) || null,
          next: (edges[idx + 1] && postNavPreview(edges[idx + 1])) || null,
        },
      }));
    });
};
