/* globals window,document */
import React from 'react';
import { mount } from 'enzyme';

import ProgressControl, { defaultMapPropsToStyle } from '../../../src/components/ProgressControl/ProgressControl';
import ProgressControlBar from '../../../src/components/ProgressControl/ProgressControlBar';

const TestComponent = () => (<div id="testComponent" />);

const defaultProps = {
  finished: false,
  progress: 0,
  speed: 10,
  mapPropsToStyle: arg => arg,
};

const setup = (props = {}) => {
  const progressControl = mount(
    <ProgressControl {...defaultProps} {...props}>
      <TestComponent />
    </ProgressControl>,
  );

  return {
    progressControl,
    progressControlBar: progressControl.find(ProgressControlBar),
    testComponent: progressControl.find(TestComponent),
  };
};

describe('ProgressControl', () => {
  describe('ProgressControl', () => {
    it('should render ProgressControl', () => {
      const { progressControl, progressControlBar, testComponent } = setup();

      const state = progressControl.state();

      expect(state).toEqual({
        finished: false,
        progress: 0,
      });
      expect(progressControlBar).toHaveLength(1);
      expect(progressControlBar.props()).toEqual({
        finished: state.finished,
        progress: state.progress,
        speed: defaultProps.speed,
        mapPropsToStyle: defaultMapPropsToStyle,
      });
      expect(testComponent).toHaveLength(1);
      expect(progressControl).toMatchSnapshot();
    });
    it('should listen to scroll and resize events', () => {
      document.addEventListener = jest.fn();
      window.addEventListener = jest.fn();
      document.removeEventListener = jest.fn();
      window.removeEventListener = jest.fn();

      const { progressControl } = setup();
      const { calculateProgress } = progressControl.instance();

      expect(document.addEventListener).toHaveBeenCalledWith('scroll', calculateProgress);
      expect(window.addEventListener).toHaveBeenCalledWith('resize', calculateProgress);

      progressControl.unmount();

      expect(document.removeEventListener).toHaveBeenCalledWith('scroll', calculateProgress);
      expect(window.removeEventListener).toHaveBeenCalledWith('resize', calculateProgress);
    });
    it('should calculate the right progress', () => {
      const { progressControl } = setup();
      const { container, calculateProgress } = progressControl.instance();

      calculateProgress();

      expect(progressControl.state()).toEqual({
        finished: false,
        progress: (100 * window.pageYOffset)
          / ((container.offsetTop + container.clientHeight) - window.innerHeight),
      });
    });
  });
  describe('defaultMapPropsToStyle', () => {
    it('should return the right styles', () => {
      expect(defaultMapPropsToStyle({ progress: 20, speed: 40 })).toEqual({
        width: '20%',
        transition: 'transform 40ms ease',
      });
    });
  });
});
