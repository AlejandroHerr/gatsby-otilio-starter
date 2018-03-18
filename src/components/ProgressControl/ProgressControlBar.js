import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './ProgressControl.module.scss';

const ProgressControlBar = ({
  finished, progress, speed, mapPropsToStyle,
}) => (
  <div className={classnames(styles.progress_control_bar, {
        [styles['progress_control_bar--finished']]: finished,
        [styles['progress_control_bar--hide']]: progress <= 0,
      })}
  >
    <div
      className={styles.progress_control_bar__bar}
      style={mapPropsToStyle({ finished, progress, speed })}
    >
      {(progress > 0 && (<div className={styles.progress_control_bar__peg} />)) || null}
    </div>
  </div>
);

ProgressControlBar.defaultProps = {
  finished: false,
};

ProgressControlBar.propTypes = {
  finished: PropTypes.bool,
  progress: PropTypes.number.isRequired,
  speed: PropTypes.number.isRequired,
  mapPropsToStyle: PropTypes.func.isRequired,
};

export default ProgressControlBar;
