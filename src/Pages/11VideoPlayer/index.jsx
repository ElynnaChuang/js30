import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import video from '../../Assets/11video.mp4';
import styles from './styles.module.scss';

import { PlayerControl } from '@/Components/11PlayerControls';
import { formatTime } from '@/Helpers/formatVideoTime';

export const VideoPlayerPage = () => {
  const videoPlayerRef = useRef(null);
  const currentTime = formatTime(videoPlayerRef.current?.getCurrentTime());
  const duration = formatTime(videoPlayerRef.current?.getDuration());

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const { playing, muted, seeking, volume } = videoState;
  const handlers = {
    handlePlayPause: () => {
      setVideoState({ ...videoState, playing: !playing });
    },
    handleMuted: () => {
      setVideoState({ ...videoState, muted: !muted });
    },
    handleRewind: () => {
      // Rewinds the video player reducing 5
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() - 5);
    },
    handleFastFoward: () => {
      // FastFowards the video player by adding 5
      videoPlayerRef.current.seekTo(videoPlayerRef.current.getCurrentTime() + 5);
    },
    handleProgressChange: value => {
      setVideoState({ ...videoState, seeking: false });
      videoPlayerRef.current.seekTo(value / 100);
    },
    handleVolumeChange: value => {
      const newVolume = parseFloat(value) / 100;

      setVideoState({
        ...videoState,
        volume: newVolume,
        muted: newVolume === 0,
      });
    },
  };

  const handleOnProgress = state => {
    if (!seeking) setVideoState({ ...videoState, ...state });
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>11 Page</h2>
        <div className={styles.player_container}>
          <ReactPlayer
            url={video}
            width='100%'
            height='100%'
            ref={videoPlayerRef}
            playing={playing}
            volume={volume}
            muted={muted}
            onProgress={handleOnProgress}
          />
          <PlayerControl
            videoState={videoState}
            handlers={handlers}
            currentTime={currentTime}
            duration={duration}
          />
        </div>
      </div>
    </section>
  );
};
