/* global window,document */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ProgressControlBar from './ProgressControlBar';

const mapPropsToStyle = ({ progress, speed }) => ({
  width: `${progress}%`,
  transition: `transform ${speed}ms ease`,
});

export default class ProgressSection extends PureComponent {
  constructor(props) {
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
    const { innerHeight, pageYOffset } = window;
    const { clientHeight, offsetTop } = this.container;

    const progress = (100 * pageYOffset) / ((offsetTop + clientHeight) - innerHeight);

    this.setState({ finished: progress > 100, progress: Math.min(progress, 100) });
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
          mapPropsToStyle={mapPropsToStyle}
        />
        {children}
      </div>
    );
  }
}

ProgressSection.defaultProps = {
  speed: 200,
};

ProgressSection.propTypes = {
  children: PropTypes.node.isRequired,
  speed: PropTypes.number,
};
