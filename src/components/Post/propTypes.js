import PropTypes from 'prop-types';

export const postPreview = PropTypes.shape({
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const image = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    resolutions: imageSharpSizesType,
    size: imageSharpSizesType,
  }),
});

export const frontmatter = PropTypes.shape({
  author: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      resolutions: imageSharpSizesType,
      size: imageSharpSizesType,
    }),
  }),
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}).isRequired;

// From there is good
export const imageSharpSizesType = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  base64: PropTypes.string,
  size: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  srcSetWebp: PropTypes.string,
  srcWebp: PropTypes.string,
});

export const frontmatterType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  cover: imageSharpSizesType,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
});

export const postType = PropTypes.shape({
  frontmatter: frontmatterType.isRequired,
  html: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
});

export const childImageSharpType = PropTypes.shape({
  sizes: imageSharpSizesType.isRequired,
});

export const authorType = PropTypes.shape({
  about: PropTypes.string.isRequired,
  avatar: childImageSharpType.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
});

export const siteInfoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});
