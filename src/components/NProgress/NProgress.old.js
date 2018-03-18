import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import NProgressRender from './NProgressRender';

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const inBetween = (value, min, max) => value >= min && value < max;

const getAmount = (progress) => {
  if (inBetween(progress, 0, 20)) {
    return 10;
  } else if (inBetween(progress, 20, 50)) {
    return 4;
  } else if (inBetween(progress, 50, 80)) {
    return 2;
  } else if (inBetween(progress, 80, 99)) {
    return 5;
  }

  return 0;
};

export default class NProgress extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      isReseting: false,
      progress: 0,
      isRunning: false,
    };

    this.done = this.done.bind(this);
    this.increment = this.increment.bind(this);
    this.set = this.set.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
    this.updateState = this.updateState.bind(this);
    this.start = this.start.bind(this);
  }

  increment(delta) {
    const { speed } = this.props;
    const { progress, isReseting } = this.state;

    if (isReseting) {
      return;
      // return NProgress.start();
    }

    if (progress > 100) {
      return;
    }

    console.log('speed', speed);

    const amount = delta
      ? clamp(progress + delta, 0, 99.4)
      : getAmount(progress) + progress;
    console.log('amount', amount, progress, getAmount(progress));
    // this.set(amount);
    this.setState({ progress: amount }, () => {
      const { isPlaying, progress } = this.state;
      if (isPlaying) {
        setTimeout(() => {
          this.increment();
        }, speed);
      }
    });
  }

  done() {
    const { speed } = this.props;
    const { progress } = this.state;

    const clampedProgress = clamp(progress + 30 + (50 * Math.random()), 0, 99.4);
    this.setState({
      isPlaying: false,
      progress: clampedProgress,
    }, () => {
      setTimeout(() => {
        this.setState({ progress: 100 });
      }, speed);
    });
  }

  set(amount) {
    const { speed } = this.props;
    const progress = clamp(amount, 0, 100);

    this.setState({ isReseting: false, progress });
  }

  updateState(state, cb = null) {
    const { speed } = this.props;

    setTimeout(() => {
      this.setState(state, () => {
        if (cb) {
          cb();
        }
      });
    });
  }

  onTransitionEnd() {
    const { progress, isReseting } = this.state;

    if (progress >= 100 && !isReseting) {
      return this.setState({ isReseting: true, isPlaying: false, progress: 0 });
    }

    if (progress === 0 && isReseting) {
      return this.setState({ isReseting: false });
    }
  }

  start() {
    this.setState({ isPlaying: true, isReseting: false });
    this.increment();
  }


  render() {
    const { isReseting, progress } = this.state;

    return (
      <div>
        <NProgressRender isReseting={isReseting} progress={progress} onTransitionEnd={this.onTransitionEnd} />
        <div>
          <button onClick={this.start}>Start</button>
          <button onClick={() => this.set(40)}>40</button>
          <button onClick={() => this.set(60)}>60</button>
          <button onClick={() => this.increment()}>Inc</button>
          <button onClick={this.done}>Done</button>
        </div>
      </div>
    );
  }
}

NProgress.defaultProps = {
  speed: 1000,
};

NProgress.propTypes = {
  speed: PropTypes.number,
};

