import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Tags from '../../../src/components/Post/Tags';
import Tag from '../../../src/components/Post/Tag';

const defaultProps = {
  tags: ['test_1', 'test_2'],
};

const setup = (props = {}) => {
  const tags = shallow(<Tags {...defaultProps} {...props} />);

  return {
    tags,
    tag: tags.find(Tag),
  };
};

describe('Post', () => {
  describe('Tags', () => {
    it('expect to render one Tag for every tag', () => {
      const { tag } = setup();

      expect(tag).toHaveLength(defaultProps.tags.length);
    });
    it('should match the exact snapshot', () => {
      const tree = renderer.create(<Tags {...defaultProps} />).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
