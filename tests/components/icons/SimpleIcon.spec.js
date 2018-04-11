import React from 'react';
import { shallow } from 'enzyme';

import SimpleIcon from '../../../src/components/icons/SimpleIcon';

const defaultProps = {
  brand: 'testBrand',
};

const setup = (props = {}) => {
  const simpleIcon = shallow(<SimpleIcon {...defaultProps} {...props} />);

  return {
    simpleIcon,
  };
};

describe('icons', () => {
  describe('SimpleIcon', () => {
    it('should render a default SimpleIcon', () => {
      const { simpleIcon } = setup();

      expect(simpleIcon.hasClass(`simple_icon__${defaultProps.brand}`)).toBeTruthy();
      expect(simpleIcon).toMatchSnapshot();
    });
    it('should render a SimpleIcon with custom options', () => {
      const props = {
        className: 'testClassName',
        style: {
          color: 'black',
        },
      };
      const { simpleIcon } = setup(props);

      expect(simpleIcon.hasClass(`simple_icon__${defaultProps.brand}`)).toBeTruthy();
      expect(simpleIcon.hasClass(props.className)).toBeTruthy();
      expect(simpleIcon.find('svg').prop('style')).toBe(props.style);
      expect(simpleIcon).toMatchSnapshot();
    });
  });
});
