/* globals document */
import React from 'react';
import { mount } from 'enzyme';

import HeroImage from '../../../src/components/HeroHeader/HeroImage';

const defaultProps = {
  image: {
    src: 'src',
  },
};

const setup = (props = {}) => {
  const heroImage = mount(<HeroImage {...defaultProps} {...props} />);

  return {
    heroImage,
  };
};


describe('HeroCover', () => {
  describe('HeroImage', () => {
    it('should render a HeroImage', () => {
      const { heroImage } = setup();

      expect(heroImage.find('div').first().prop('style').transform).toBe('translate3d(0px, 0px, 0px)');

      expect(heroImage).toMatchSnapshot();
    });
    it('should listen to scroll events', () => {
      document.addEventListener = jest.fn();
      document.removeEventListener = jest.fn();

      const { heroImage } = setup();
      const { handleScroll } = heroImage.instance();

      expect(document.addEventListener).toHaveBeenCalledWith('scroll', handleScroll);

      heroImage.unmount();

      expect(document.removeEventListener).toHaveBeenCalledWith('scroll', handleScroll);
    });
    it('should handle on scroll events', () => {
      const { heroImage } = setup();

      const scrollTop = 50;

      document.documentElement.scrollTop = scrollTop;

      heroImage.instance().handleScroll();
      heroImage.update();

      expect(heroImage.find('div').first().prop('style').transform).toBe(`translate3d(0px, ${scrollTop / 5}px, 0px)`);
      expect(heroImage).toMatchSnapshot();

      document.documentElement.scrollTop = null;

      heroImage.instance().handleScroll();
      heroImage.update();

      expect(heroImage.find('div').first().prop('style').transform).toBe('translate3d(0px, 0px, 0px)');
      expect(heroImage).toMatchSnapshot();
    });
  });
});
