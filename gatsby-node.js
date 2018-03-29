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
  const PostTemplate = path.resolve('./src/templates/PostTemplate.js');

  return new Promise((resolve) => {
    resolve(graphql(`
      {
        site {
          siteMetadata {
            title
            author
          }
        }
        posts: allMarkdownRemark(
          limit: 1000,
          filter: { fileAbsolutePath: { regex: "/(posts)/.*.md$/" } },
          sort: {fields: [frontmatter___date]}
        ) {
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
    .then(({ data }) => {
      console.log(data);
      const { posts } = data;

      posts.edges.forEach(({ node }, idx, edges) => createPage({
        path: node.frontmatter.path,
        component: PostTemplate,
        context: {
          prev: (edges[idx - 1] && postNavPreview(edges[idx - 1])) || null,
          next: (edges[idx + 1] && postNavPreview(edges[idx + 1])) || null,
        },
      }));
    });
};
