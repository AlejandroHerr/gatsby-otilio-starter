import PropTypes from 'prop-types';

export const ImageSharpSizesWithWebpType = PropTypes.shape({
  aspectRatio: PropTypes.number.isRequired,
  base64: PropTypes.string.isRequired,
  sizes: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string.isRequired,
  srcSetWebp: PropTypes.string.isRequired,
  srcWebp: PropTypes.string.isRequired,
});

export const ImageSharpType = PropTypes.shape({
  childImageSharp: PropTypes.shape({
    sizes: ImageSharpSizesWithWebpType.isRequired,
  }).isRequired,
});
