import React from 'react';
import { shallow } from 'enzyme';

import ProgressControlBar from '../../../src/components/ProgressControl/ProgressControlBar';

const defaultProps = {
  finished: false,
  progress: 0,
  speed: 10,
  mapPropsToStyle: arg => arg,
};

const setup = (props = {}) => {
  const progressControlBar = shallow(<ProgressControlBar {...defaultProps} {...props} />);

  return {
    progressControlBar,
    bar: progressControlBar.find('.progress_control_bar__bar'),
    peg: progressControlBar.find('.progress_control_bar__peg'),
  };
};

describe('ProgressControl', () => {
  describe('ProgressControlBar', () => {
    it('should render ProgressControlBar for progress 0', () => {
      const { progressControlBar, bar, peg } = setup();

      expect(progressControlBar).toHaveLength(1);
      expect(progressControlBar.hasClass('progress_control_bar--hide')).toBeTruthy();
      expect(progressControlBar.hasClass('progress_control_bar--finished')).toBeFalsy();
      expect(bar).toHaveLength(1);
      expect(bar.prop('style')).toEqual(defaultProps.mapPropsToStyle({
        progress: defaultProps.progress,
        speed: defaultProps.speed,
        finished: defaultProps.finished,
      }));
      expect(peg).toHaveLength(0);
      expect(progressControlBar).toMatchSnapshot();
    });
    it('should render ProgressControlBar when in progress', () => {
      const props = {
        finished: false,
        progress: 50,
      };
      const { progressControlBar, bar, peg } = setup(props);

      expect(progressControlBar).toHaveLength(1);
      expect(progressControlBar.hasClass('progress_control_bar--hide')).toBeFalsy();
      expect(progressControlBar.hasClass('progress_control_bar--finished')).toBeFalsy();
      expect(bar).toHaveLength(1);
      expect(bar.prop('style')).toEqual(defaultProps.mapPropsToStyle({
        progress: props.progress,
        speed: defaultProps.speed,
        finished: props.finished,
      }));
      expect(peg).toHaveLength(1);
      expect(progressControlBar).toMatchSnapshot();
    });
    it('should render ProgressControlBar when progress finished', () => {
      const props = {
        finished: true,
        progress: 100,
      };
      const { progressControlBar, bar, peg } = setup(props);

      expect(progressControlBar).toHaveLength(1);
      expect(progressControlBar.hasClass('progress_control_bar--hide')).toBeFalsy();
      expect(progressControlBar.hasClass('progress_control_bar--finished')).toBeTruthy();
      expect(bar).toHaveLength(1);
      expect(bar.prop('style')).toEqual(defaultProps.mapPropsToStyle({
        progress: props.progress,
        speed: defaultProps.speed,
        finished: props.finished,
      }));
      expect(peg).toHaveLength(1);
      expect(progressControlBar).toMatchSnapshot();
    });
  });
});
