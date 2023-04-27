import { useState, useRef } from 'react';
import ReactPlayer from 'react-player';
import video from '../../Assets/11video.mp4';
import styles from './styles.module.scss';

import { PlayerControl } from '@/Components/11PlayerControls';
import { formatTime } from '@/Helpers/formatVideoTime';

export const VideoPlayerPage = () => {
  const videoPlayerRef = useRef(null);
  const videoContainerRef = useRef(null);
  const currentTime = formatTime(videoPlayerRef.current?.getCurrentTime());
  const duration = formatTime(videoPlayerRef.current?.getDuration());

  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
    ended: false,
    playbackRate: 1,
  });
  const [controlShow, setControlShow] = useState(false);

  const { playing, muted, seeking, volume, playbackRate } = videoState;
  const handlers = {
    handlePlayPauseReplay: ended => {
      if (ended) return setVideoState({ ...videoState, playing: true, ended: false });

      return setVideoState({ ...videoState, playing: !playing });
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
    handleSpeedChange: value => {
      setVideoState(prev => ({ ...prev, playbackRate: value }));
    },
  };

  const handleOnProgress = state => {
    if (!seeking) setVideoState({ ...videoState, ...state });
  };

  const handleOnEnd = () => {
    setVideoState({
      ...videoState,
      playing: false,
      seeking: false,
      ended: true,
    });
  };

  // --- 滑鼠自動消失 -- //
  const cursorTimeoutRef = useRef(null);
  const handleMouseMove = () => {
    videoContainerRef.current.style.cursor = 'default';
    setControlShow(true);
    clearTimeout(cursorTimeoutRef.current);
    cursorTimeoutRef.current = setTimeout(() => {
      videoContainerRef.current.style.cursor = 'none';
      setControlShow(false);
    }, 1000);
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>Video Player</h2>
        <div className={styles.content_container}>
          <div
            ref={videoContainerRef}
            onMouseEnter={() => setControlShow(true)}
            onMouseLeave={() => setControlShow(false)}
            onMouseMove={handleMouseMove}
            role='button'
            tabIndex={0}
          >
            <ReactPlayer
              url={video}
              width='100%'
              height='100%'
              style={{ display: 'flex' }}
              ref={videoPlayerRef}
              playing={playing}
              volume={volume}
              muted={muted}
              playbackRate={playbackRate}
              onProgress={handleOnProgress}
              onEnded={handleOnEnd}
            />
            <PlayerControl
              show={controlShow}
              videoState={videoState}
              handlers={handlers}
              videoInfo={{
                name: 'Sample Video',
                currentTime,
                duration,
                fullscreenDOM: videoContainerRef.current,
              }}
            />
          </div>
          <div className={styles.border} />
        </div>
      </div>
    </section>
  );
};
