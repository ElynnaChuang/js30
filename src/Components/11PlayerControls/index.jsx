import {
  SkipNext,
  Pause,
  FastForward,
  FastRewind,
  PlayArrow,
  VolumeUp,
  VolumeOff,
} from '@mui/icons-material';
import { Slider } from '@mui/material';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const PlayerControl = ({ videoState, handlers }) => {
  const { playing, muted, played } = videoState;
  const {
    handlePlayPause,
    handleMuted,
    handleRewind,
    handleFastFoward,
    handleProgressChange,
  } = handlers;

  const progressSliderMax = 100;
  const [progressValue, setProgressValue] = useState(played * progressSliderMax); // played數值為 0 ~ 1，1為播完全部

  useEffect(() => {
    setProgressValue(played * progressSliderMax);
  }, [played]);

  const onProgressChange = (event, moveValue) => {
    const { type } = event;

    if (type === 'mousedown') {
      const clickValue = event.target.value;
      setProgressValue(clickValue);
      handleProgressChange?.(clickValue);
    } else if (type === 'mousemove') {
      setProgressValue(moveValue);
      handleProgressChange?.(moveValue);
    }
  };

  return (
    <div className={styles.control_container}>
      <div className={styles.top_container}>
        <h2>Video PLayer</h2>
      </div>

      <div className={styles.mid_container}>
        <button className={styles.icon__btn} onDoubleClick={() => handleRewind?.()}>
          <FastRewind fontSize='medium' />
        </button>

        <button className={styles.icon__btn} onClick={() => handlePlayPause?.()}>
          {playing ? <Pause fontSize='medium' /> : <PlayArrow fontSize='medium' />}
        </button>

        <button className={styles.icon__btn} onDoubleClick={() => handleFastFoward?.()}>
          <FastForward fontSize='medium' />
        </button>
      </div>

      <div className={styles.bottom_container}>
        <div className={styles.progress_container}>
          <Slider
            className={styles.progress}
            min={0}
            max={progressSliderMax}
            value={progressValue}
            onChange={onProgressChange}
            onChangeCommitted={onProgressChange}
          />
        </div>
        <div className={styles.controls_container}>
          <div className={styles.play}>
            <button className={styles.icon__btn} onClick={() => handlePlayPause?.()}>
              {playing ? <Pause fontSize='medium' /> : <PlayArrow fontSize='medium' />}
            </button>

            <div className={styles.icon__btn}>
              <SkipNext fontSize='medium' />
            </div>
          </div>

          <div className={styles.valume}>
            <button className={styles.icon__btn} onClick={() => handleMuted?.()}>
              {!muted ? <VolumeUp fontSize='medium' /> : <VolumeOff fontSize='medium' />}
            </button>
            <Slider className={styles.volumeSlider} />
            <span className={styles.volumeValue}>5/20</span>
          </div>
        </div>
      </div>
    </div>
  );
};
