import React from 'react';
import { shallow } from 'enzyme';

import Link from 'gatsby-link';

import Pagination from '../../../src/components/PostsIndex/Pagination';

const defaultProps = {
  first: false,
  last: false,
  index: 1,
  pageCount: 1,
  pathPrefix: 'prefix',
};

const setup = (props = {}) => {
  const pagination = shallow(<Pagination {...defaultProps} {...props} />);

  return {
    pagination,
    link: pagination.find(Link),
    info: pagination.find('.posts_index_pagination__info'),
  };
};

describe('PostsIndex', () => {
  describe('Pagination', () => {
    it('should render a pagination for one page only', () => {
      const { pagination, link, info } = setup({
        first: true,
        last: true,
      });

      expect(link).toHaveLength(0);
      expect(info.text()).toBe(`Page ${defaultProps.index} of ${defaultProps.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for the first page', () => {
      const props = {
        ...defaultProps,
        first: true,
        pageCount: 10,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(1);
      expect(link.first().prop('to')).toBe(`${props.pathPrefix}/page/${props.index + 1}`);
      expect(info.text()).toBe(`Page ${props.index} of ${props.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for middle page', () => {
      const props = {
        ...defaultProps,
        pageCount: 10,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(2);
      expect(link.first().prop('to')).toBe(props.pathPrefix);
      expect(info.text()).toBe(`Page ${props.index} of ${props.pageCount}`);
      expect(link.last().prop('to')).toBe(`${props.pathPrefix}/page/${props.index + 1}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for the last page', () => {
      const props = {
        ...defaultProps,
        last: true,
        index: 3,
        pageCount: 3,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(1);
      expect(link.first().prop('to')).toBe(`${props.pathPrefix}/page/${props.index - 1}`);
      expect(info.text()).toBe(`Page ${props.index} of ${props.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
  });
});
