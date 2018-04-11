import React from 'react';
import { shallow } from 'enzyme';

import ByteIcon from '../../../src/components/icons/ByteIcon';

const defaultProps = {
  icon: 'testIcon',
};

const setup = (props = {}) => {
  const byteIcon = shallow(<ByteIcon {...defaultProps} {...props} />);

  return {
    byteIcon,
  };
};

describe('icons', () => {
  describe('ByteIcon', () => {
    it('should render a default ByteIcon', () => {
      const { byteIcon } = setup();

      expect(byteIcon.hasClass(`byte_icon__${defaultProps.icon}`)).toBeTruthy();
      expect(byteIcon).toMatchSnapshot();
    });
    it('should render a ByteIcon with custom options', () => {
      const props = {
        bold: true,
        className: 'testClassName',
      };
      const { byteIcon } = setup(props);

      expect(byteIcon.hasClass(`byte_icon__${defaultProps.icon}`)).toBeTruthy();
      expect(byteIcon.hasClass('byte_icon__bold')).toBeTruthy();
      expect(byteIcon.hasClass(props.className)).toBeTruthy();
      expect(byteIcon).toMatchSnapshot();
    });
  });
});
