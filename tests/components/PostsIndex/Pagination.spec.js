import React from 'react';
import { shallow } from 'enzyme';

import Link from 'gatsby-link';

import Pagination from '../../../src/components/PostsIndex/Pagination';

const defaultProps = {
  page: 1,
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
      const { pagination, link, info } = setup();

      expect(link).toHaveLength(0);
      expect(info.text()).toBe(`Page ${defaultProps.page} of ${defaultProps.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for the first page', () => {
      const props = {
        ...defaultProps,
        pageCount: 2,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(1);
      expect(link.first().prop('to')).toBe(`${props.pathPrefix}/page/${props.page + 1}`);
      expect(info.text()).toBe(`Page ${props.page} of ${props.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for middle page', () => {
      const props = {
        ...defaultProps,
        page: 2,
        pageCount: 3,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(2);
      expect(link.first().prop('to')).toBe(props.pathPrefix);
      expect(info.text()).toBe(`Page ${props.page} of ${props.pageCount}`);
      expect(link.last().prop('to')).toBe(`${props.pathPrefix}/page/${props.page + 1}`);
      expect(pagination).toMatchSnapshot();
    });
    it('should render pagination for the last page', () => {
      const props = {
        ...defaultProps,
        page: 3,
        pageCount: 3,
      };
      const { pagination, link, info } = setup(props);

      expect(link).toHaveLength(1);
      expect(link.first().prop('to')).toBe(`${props.pathPrefix}/page/${props.page - 1}`);
      expect(info.text()).toBe(`Page ${props.page} of ${props.pageCount}`);
      expect(pagination).toMatchSnapshot();
    });
  });
});
