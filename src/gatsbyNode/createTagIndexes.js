const createPaginatedPages = require('gatsby-paginate');

const createTagIndex = (tag, listOfPosts, tagCovers, createPage) => {
  const cover = tagCovers.find(({ node }) => new RegExp(tag.tagSlug).test(node.id));

  createPaginatedPages({
    edges: listOfPosts,
    createPage,
    pageTemplate: 'src/templates/TagIndexTemplate.js',
    pageLength: 5, // This is optional and defaults to 10 if not used
    pathPrefix: `/tags/${tag.tagSlug}`,
    buildPath: (index, pathPrefix) => (index > 1 ? `${pathPrefix}/page/${index}` : `${pathPrefix}`), // This is optional and this is the default
    context: {
      cover: (cover && cover.node) || null,
      tag: tag.tag,
      total: listOfPosts.length,
    },
  });
};

const getTagList = posts => posts.map(({ tags }) => tags || null)
  .filter(tags => !!tags)
  .reduce((list, group) => group.reduce((partialList, currentTag) =>
    (partialList.find(tag => tag.tagSlug === currentTag.tagSlug)
      ? partialList
      : partialList.concat(currentTag)), list), []);

exports.createTagIndexes = (postsIndex, tagCovers, createPage) => {
  // const tagList = postsIndex.map(({ tags }) => tags || null).filter(tags => !!tags);
  const tagList = getTagList(postsIndex);
  const postsByTag = tagList.reduce((list, currentTag) =>
    list.concat([postsIndex.filter(({ tags }) =>
      (tags && tags.find(tag => tag.tagSlug === currentTag.tagSlug))
      || false)]), []);

  tagList.forEach((tag, idx) => {
    // console.log('postsByTag[idx]', idx, postsByTag[idx]);
    createTagIndex(tag, postsByTag[idx], tagCovers, createPage);
  });
};
