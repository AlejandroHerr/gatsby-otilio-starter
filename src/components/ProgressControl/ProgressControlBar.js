// @flow
import React from 'react';
import classnames from 'classnames';
import styles from './ProgressControl.module.scss';

type PropsType = {
  finished: boolean,
  progress: number,
  speed: number,
  mapPropsToStyle: ({progress: number, speed: number}) => {[string]: string},
};

const ProgressControlBar = ({
  finished, progress, speed, mapPropsToStyle,
}: PropsType) => (
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

export default ProgressControlBar;
