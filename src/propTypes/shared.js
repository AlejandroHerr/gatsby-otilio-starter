import PropTypes from 'prop-types';

export const imageSharpSizesType = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  base64: PropTypes.string,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  srcSetWebp: PropTypes.string,
  srcWebp: PropTypes.string,
});

export const childImageSharpType = PropTypes.shape({
  sizes: imageSharpSizesType.isRequired,
});
