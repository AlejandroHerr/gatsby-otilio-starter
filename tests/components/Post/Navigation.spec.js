import React from 'react';
import { shallow } from 'enzyme';

import Navigation from '../../../src/components/Post/Navigation';
import NavigationLink from '../../../src/components/Post/NavigationLink';

const next = {
  excerpt: 'prevExcerpt',
  path: 'prevPath',
  title: 'prevTitle',
};

const prev = {
  excerpt: 'prevExcerpt',
  path: 'prevPath',
  title: 'prevTitle',
};

const setup = (props = {}) => {
  const navigation = shallow(<Navigation {...props} />);

  return {
    navigation,
    navigationLink: navigation.find(NavigationLink),
  };
};

describe('Post', () => {
  describe('Navigation', () => {
    it('should match the exact snapshot with prev and next', () => {
      const { navigation, navigationLink } = setup();

      expect(navigationLink).toHaveLength(0);
      expect(navigation).toMatchSnapshot();
    });
    it('should match the exact snapshot with prev and next', () => {
      const { navigation, navigationLink } = setup({ next, prev });

      expect(navigationLink).toHaveLength(2);
      expect(navigation).toMatchSnapshot();
    });
  });
});
