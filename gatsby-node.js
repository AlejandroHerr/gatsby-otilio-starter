const path = require('path');
const slugify = require('slug');
const createPaginatedPages = require('gatsby-paginate');

const postNavPreview = ({ node }) => {
  const { previewExcerpt: excerpt, fields, frontmatter } = node;

  return {
    excerpt,
    path: fields.slug,
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
          sort: {fields: [frontmatter___date], order: DESC}
        ) {
          edges {
            node {
              excerpt(pruneLength: 300)
              previewExcerpt: excerpt(pruneLength: 100)
              fields {
                slug
              }
              frontmatter {
                author
                date(formatString: "DD MMMM, YYYY")
                title
                tags
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
      const { posts } = data;

      const postsIndex = posts.edges.map(({ node }) => {
        const { excerpt, fields, frontmatter } = node;

        return {
          excerpt,
          slug: fields.slug,
          ...frontmatter,
        };
      });

      createPaginatedPages({
        edges: postsIndex,
        createPage,
        pageTemplate: 'src/templates/PostsIndexTemplate.js',
        pageLength: 5, // This is optional and defaults to 10 if not used
        pathPrefix: 'page',
        buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/${index}` : '/'), // This is optional and this is the default

      });

      posts.edges.forEach(({ node }, idx, edges) => createPage({
        path: node.fields.slug,
        component: PostTemplate,
        context: {
          next: (edges[idx - 1] && postNavPreview(edges[idx - 1])) || null,
          prev: (edges[idx + 1] && postNavPreview(edges[idx + 1])) || null,
          slug: node.fields.slug,
        },
      }));
    });
};

const createSlug = (date, title) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  const datePart = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
  const titlePart = slugify(title);

  return `/${datePart}/${titlePart}/`;
};

exports.onCreateNode = ({ node, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const { date, title } = node.frontmatter;
    const slug = createSlug(new Date(date), title);

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
