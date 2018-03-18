import PropTypes from 'prop-types';

export const postPreview = PropTypes.shape({
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const imageSharp = PropTypes.shape({
  aspectRatio: PropTypes.number,
  base64: PropTypes.string,
  size: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
  srcSetWebp: PropTypes.string,
  srcWebp: PropTypes.string,
});

export const image = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    resolutions: imageSharp,
    size: imageSharp,
  }),
});

export const frontmatter = PropTypes.shape({
  author: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      resolutions: imageSharp,
      size: imageSharp,
    }),
  }),
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}).isRequired;

