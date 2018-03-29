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

export const frontmatterType = PropTypes.shape({
  author: PropTypes.string.isRequired,
  cover: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      sizes: imageSharpSizesType.isRequired,
    }).isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  path: PropTypes.string.isRequired,
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
  avatar: PropTypes.shape({
    childImageSharp: PropTypes.shape({
      sizes: imageSharpSizesType.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  social: PropTypes.arrayOf(PropTypes.shape({
    service: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
});

export const postPreviewType = PropTypes.shape({
  excerpt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

export const siteInfoType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const socialSummaryType = PropTypes.shape({
  description: PropTypes.string.isRequired,
  frontmatter: PropTypes.shape({
    title: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    image: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        resolutions: PropTypes.shape({
          src: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }),
});
