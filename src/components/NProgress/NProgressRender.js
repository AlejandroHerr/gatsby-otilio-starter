import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './NProgress.module.scss';

const NProgressRender = ({
  isReseting, speed, progress, onTransitionEnd,
}) => (
  <div className={styles.n_progress}>
    <div
      className={classnames(styles.n_progress__bar, {
        [styles['n_progress__bar--reseting']]: isReseting,
      })}
      style={{
        transform: `translate3d(${progress - 100}%, 0, 0)`,
        transition: isReseting ? 'none' : `transform ${speed}ms ease`,
      }}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.n_progress__peg} />
    </div>
  </div>
);

NProgressRender.defaultProps = {
  isReseting: false,
  progress: 0,
  onTransitionEnd: null,
};

NProgressRender.propTypes = {
  isReseting: PropTypes.bool,
  progress: PropTypes.number,
  onTransitionEnd: PropTypes.func,
};

export default NProgressRender;
