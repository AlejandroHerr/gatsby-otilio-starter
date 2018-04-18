const createPaginatedPages = require('gatsby-paginate');

const createTagIndex = (tag, listOfPosts, tagCovers, createPage) => {
  const tagSlug = tag.toLowerCase().replace(' ', '');

  const cover = tagCovers.find(({ node }) => new RegExp(tagSlug).test(node.id));

  createPaginatedPages({
    edges: listOfPosts,
    createPage,
    pageTemplate: 'src/templates/PostsIndexByTagTemplate.js',
    pageLength: 5, // This is optional and defaults to 10 if not used
    pathPrefix: `/tags/${tagSlug}`,
    buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/page/${index}` : `${pathPrefix}`), // This is optional and this is the default
    context: {
      cover: (cover && cover.node) || null,
      tag,
      total: listOfPosts.length,
    },
  });
};

exports.createTagIndexes = (postsIndex, tagCovers, createPage) => {
  const postsByTag = postsIndex.reduce((listByTag, post) => (!post.tags || !post.tags.length
    ? listByTag
    : post.tags.reduce((listsOfPosts, { tagSlug }) => ({
      ...listsOfPosts,
      [tagSlug]: listsOfPosts[tagSlug]
        ? listsOfPosts[tagSlug].concat(post)
        : [post],

    }), listByTag)), {});

  Object.entries(postsByTag)
    .forEach(([tag, listOfPosts]) => createTagIndex(tag, listOfPosts, tagCovers, createPage));
};
