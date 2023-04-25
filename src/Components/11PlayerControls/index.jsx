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

import styles from './styles.module.scss';

export const PlayerControl = ({ videoState, handlers }) => {
  const { playing, muted } = videoState;
  const { handlePlayPause, handleMuted } = handlers;
  return (
    <div className={styles.control_container}>
      <div className={styles.top_container}>
        <h2>Video PLayer</h2>
      </div>

      <div className={styles.mid_container}>
        <div className={styles.icon__btn}>
          <FastRewind fontSize='medium' />
        </div>

        <button className={styles.icon__btn} onClick={() => handlePlayPause?.()}>
          {playing ? <Pause fontSize='medium' /> : <PlayArrow fontSize='medium' />}
        </button>

        <div className={styles.icon__btn}>
          <FastForward fontSize='medium' />
        </div>
      </div>

      <div className={styles.bottom_container}>
        <div className={styles.progress_container}>
          <Slider className={styles.progress} />
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
