import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Img from 'gatsby-image';

import Author from '../../../src/components/Post/Author';
import SocialLink from '../../../src/components/Post/SocialLink';

const defaultProps = {
  author: {
    name: 'Test Name',
    about: 'Lorem Ipsum',
    avatar: {
      childImageSharp: {
        sizes: {
          aspectRatio: 1,
          sizes: 'sizes',
          src: 'src',
          srcSet: 'srcSet',
        },
      },
    },
    location: 'Test Location',
    social: [
      { service: 'Test Service 1', url: 'Url 1' },
      { service: 'Test Service 2', url: 'Url 2' },
    ],
  },
};

const setup = (props = {}) => {
  const author = shallow(<Author {...defaultProps} {...props} />);

  return {
    author,
    image: author.find(Img),
    socialLinks: author.find(SocialLink),
  };
};

describe('Post', () => {
  describe('Author', () => {
    it('should render a Gatsby Image', () => {
      const { image } = setup();

      expect(image).toHaveLength(1);
      expect(image.prop('sizes')).toBe(defaultProps.author.avatar.childImageSharp.sizes);
    });
    it('should render SimpleIcons for every social icon', () => {
      const { socialLinks } = setup();

      expect(socialLinks).toHaveLength(defaultProps.author.social.length);

      defaultProps.author.social.forEach((link, idx) => {
        const socialLink = socialLinks.at(idx);

        expect(socialLink.prop('service')).toBe(link.service);
        expect(socialLink.prop('url')).toBe(link.url);
      });
    });
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<Author {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
