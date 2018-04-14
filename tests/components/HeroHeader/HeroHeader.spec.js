import React from 'react';
import { shallow } from 'enzyme';

import HeroHeader from '../../../src/components/HeroHeader/HeroHeader';
import HeroImage from '../../../src/components/HeroHeader/HeroImage';

const TestComponent = () => (<div id="testComponent" />);

const setup = (props = {}) => {
  const heroHeader = shallow(<HeroHeader {...props}><TestComponent /></HeroHeader>);

  return {
    heroHeader,
    heroImage: heroHeader.find(HeroImage),
    testComponent: heroHeader.find(TestComponent),
  };
};

describe('HeroCover', () => {
  describe('HeroHeader', () => {
    it('should render without HeroImage', () => {
      const { heroHeader, heroImage, testComponent } = setup();

      expect(heroImage).toHaveLength(0);
      expect(testComponent).toHaveLength(1);
      expect(heroHeader).toMatchSnapshot();
    });
    it('should render a HeroImage', () => {
      const { heroHeader, heroImage, testComponent } = setup({ image: { src: 'src' } });

      expect(heroImage).toHaveLength(1);
      expect(testComponent).toHaveLength(1);
      expect(heroHeader).toMatchSnapshot();
    });
  });
});
