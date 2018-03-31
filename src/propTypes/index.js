import PropTypes from 'prop-types';
import { imageSharpSizesType } from './shared';

export const siteInfoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      sizes: imageSharpSizesType.isRequired,
    }).isRequired,
  }).isRequired,
});
