import {
  SkipNext,
  Pause,
  FastForward,
  FastRewind,
  PlayArrow,
  VolumeUp,
  VolumeOff,
  Replay,
} from '@mui/icons-material';
import { Slider } from '@mui/material';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const PlayerControl = ({ videoState, handlers, currentTime, duration }) => {
  const { playing, volume, muted, played, ended } = videoState; // volume 數值為 0 ~ 1
  const {
    handlePlayPauseReplay,
    handleMuted,
    handleRewind,
    handleFastFoward,
    handleProgressChange,
    handleVolumeChange,
  } = handlers;

  // ------- 進度條 ----------//
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

  // ------- 音量 ----------//
  const volumeSliderMax = 100;
  const [volumeValue, setVolumeValue] = useState(volume * volumeSliderMax);

  const onVolumeChange = (event, moveValue) => {
    const { type } = event;

    if (type === 'mousedown') {
      const clickValue = event.target.value;
      setVolumeValue(clickValue);
      handleVolumeChange(clickValue);
    } else if (type === 'mousemove') {
      setVolumeValue(moveValue);
      handleVolumeChange(moveValue);
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

        <button
          className={styles.icon__btn}
          onClick={() => handlePlayPauseReplay?.(ended)}
        >
          {ended ? (
            <Replay fontSize='medium' />
          ) : playing ? (
            <Pause fontSize='medium' />
          ) : (
            <PlayArrow fontSize='medium' />
          )}
        </button>

        <button className={styles.icon__btn} onDoubleClick={() => handleFastFoward?.()}>
          <FastForward fontSize='medium' />
        </button>
      </div>

      <div className={styles.bottom_container}>
        <div className={styles.progress_container}>
          <div className={styles.time}>
            {currentTime} / {duration}
          </div>

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
            <button
              className={styles.icon__btn}
              onClick={() => handlePlayPauseReplay?.(ended)}
            >
              {ended ? (
                <Replay fontSize='medium' />
              ) : playing ? (
                <Pause fontSize='medium' />
              ) : (
                <PlayArrow fontSize='medium' />
              )}
            </button>

            <div className={styles.icon__btn}>
              <SkipNext fontSize='medium' />
            </div>
          </div>

          <div className={styles.valume}>
            <button className={styles.icon__btn} onClick={() => handleMuted?.()}>
              {!muted ? <VolumeUp fontSize='medium' /> : <VolumeOff fontSize='medium' />}
            </button>
            <Slider
              className={styles.volumeSlider}
              min={0}
              max={volumeSliderMax}
              value={volumeValue}
              onChange={onVolumeChange}
              onChangeCommitted={onVolumeChange}
            />
            <span className={styles.volumeValue}>
              {volumeValue} / {volumeSliderMax}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
