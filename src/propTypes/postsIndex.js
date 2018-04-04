import PropTypes from 'prop-types';
import { imageSharpSizesType } from './shared';

export const articleType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
});

export const pathContextType = PropTypes.shape({
  group: PropTypes.arrayOf(articleType.isRequired).isRequired,
  index: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  pathPrefix: PropTypes.string.isRequired,
});

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
