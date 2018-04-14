// @flow
/* global window,document */
import React, { PureComponent, type Node } from 'react';

import ProgressControlBar from './ProgressControlBar';

type PropsType = {
  children: Node,
  speed: number,
};

type StateType = {
  finished: boolean,
  progress: number,
};

export const defaultMapPropsToStyle = ({ progress, speed }: {progress: number, speed: number}) => ({
  width: `${progress}%`,
  transition: `transform ${speed}ms ease`,
});

export default class ProgressControl extends PureComponent<PropsType, StateType> {
  container: ?HTMLDivElement;
  calculateProgress: () => void;

  static defaultProps: {
    speed: number,
  }

  constructor(props: PropsType) {
    super(props);

    this.state = {
      finished: false,
      progress: 0,
    };

    this.container = null;
    this.calculateProgress = this.calculateProgress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.calculateProgress);
    window.addEventListener('resize', this.calculateProgress);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.calculateProgress);
    window.removeEventListener('resize', this.calculateProgress);
  }

  calculateProgress() {
    if (this.container) {
      const { innerHeight, pageYOffset } = window;
      const { clientHeight, offsetTop } = this.container;

      const progress = (100 * pageYOffset) / ((offsetTop + clientHeight) - innerHeight);

      this.setState({ finished: progress > 100, progress: Math.min(progress, 100) });
    }
  }

  render() {
    const { children, speed } = this.props;
    const { finished, progress } = this.state;

    return (
      <div ref={(ref) => { this.container = ref; }}>
        <ProgressControlBar
          finished={finished}
          progress={progress}
          speed={speed}
          mapPropsToStyle={defaultMapPropsToStyle}
        />
        {children}
      </div>
    );
  }
}

ProgressControl.defaultProps = {
  speed: 200,
};
