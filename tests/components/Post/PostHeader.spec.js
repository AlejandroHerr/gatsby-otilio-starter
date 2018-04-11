import React from 'react';
import { shallow } from 'enzyme';

import HeroHeader from '../../../src/components/HeroHeader';
import PostHeader from '../../../src/components/Post/PostHeader';

const defaultProps = {
  description: 'Test description',
  author: 'author',
  date: '2018-04-30T05:00:00.000Z',
  title: 'Test title',
  timeToRead: 1,
};

const setup = (props = {}) => {
  const postHeader = shallow(<PostHeader {...defaultProps} {...props} />);

  return {
    postHeader,
    time: postHeader.find('time'),
    heroHeader: postHeader.find(HeroHeader),
  };
};

describe('Post', () => {
  describe('PostHeader', () => {
    it('should render a HeroHeader', () => {
      const { postHeader, time, heroHeader } = setup();

      const date = new Date(defaultProps.date);
      const dateTime = date.toISOString();
      const dateText = date.toLocaleDateString('en-us', { day: 'numeric', month: 'short', year: 'numeric' });

      expect(time.prop('dateTime')).toBe(dateTime);
      expect(time.text()).toBe(dateText);
      expect(heroHeader).toHaveLength(1);
      expect(postHeader).toMatchSnapshot();
    });
  });
});
