import { useEffect, useState } from 'react';
import {
  Pause,
  FastForward,
  FastRewind,
  PlayArrow,
  VolumeUp,
  VolumeOff,
  Replay,
  Fullscreen,
  FullscreenExit,
} from '@mui/icons-material';
import { Slider } from '@mui/material';
import screenfull from 'screenfull';

import { SpeedBtn } from './SpeedBtn';
import styles from './styles.module.scss';

export const PlayerControl = ({ show, videoInfo, videoState, handlers }) => {
  const { name, currentTime, duration, fullscreenDOM } = videoInfo;
  const { playing, volume, muted, played, ended, playbackRate } = videoState; // volume 數值為 0 ~ 1
  const {
    handlePlayPauseReplay,
    handleMuted,
    handleRewind,
    handleFastFoward,
    handleProgressChange,
    handleVolumeChange,
    handleSpeedChange,
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

  // --- 全螢幕 --- //
  const [isFullScreen, setIsFullScreen] = useState(false);
  const handleFullScreen = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle(fullscreenDOM);
      setIsFullScreen(!isFullScreen);
    }
  };

  return (
    <div className={show ? styles.control_container_show : styles.control_container_hide}>
      <div className={styles.top_container}>
        <h2>{name}</h2>
      </div>

      <div className={styles.mid_container}>
        <button className={styles.icon_btn} onDoubleClick={() => handleRewind?.()}>
          <FastRewind fontSize='medium' />
        </button>

        <button
          className={styles.icon_btn}
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

        <button className={styles.icon_btn} onDoubleClick={() => handleFastFoward?.()}>
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
            sx={{
              height: 6,
              '& .MuiSlider-thumb': {
                width: 16,
                height: 16,
              },
            }}
          />
        </div>
        <div className={styles.controls_container}>
          <div className={styles.play}>
            <button
              className={styles.icon_btn}
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
          </div>

          <div className={styles.volume}>
            <button className={styles.icon_btn} onClick={() => handleMuted?.()}>
              {!muted ? <VolumeUp fontSize='medium' /> : <VolumeOff fontSize='medium' />}
            </button>
            <Slider
              className={styles.volume_slider}
              min={0}
              max={volumeSliderMax}
              value={volumeValue}
              onChange={onVolumeChange}
              onChangeCommitted={onVolumeChange}
              sx={{
                height: 4,
                '& .MuiSlider-thumb': {
                  width: 12,
                  height: 12,
                },
              }}
            />
            <span className={styles.volume_value}>
              {volumeValue} / {volumeSliderMax}
            </span>
          </div>
          <SpeedBtn
            show={show}
            currentSpeed={playbackRate}
            onSpeedChange={handleSpeedChange}
          />
          <button className={styles.icon_btn} onClick={handleFullScreen}>
            {isFullScreen ? <FullscreenExit /> : <Fullscreen />}
          </button>
        </div>
      </div>
    </div>
  );
};
