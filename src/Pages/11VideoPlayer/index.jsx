import { useState } from 'react';
import ReactPlayer from 'react-player';
import video from '../../Assets/11video.mp4';
import styles from './styles.module.scss';

import { PlayerControl } from '@/Components/11PlayerControls';

export const VideoPlayerPage = () => {
  const [videoState, setVideoState] = useState({
    playing: false,
    muted: false,
    volume: 0.5,
    played: 0,
    seeking: false,
    Buffer: true,
  });
  const { playing, muted, volume, playbackRate, played, seeking, buffer } = videoState;
  console.log(volume, playbackRate, played, seeking, buffer);

  const handlePlayPause = () => {
    setVideoState({ ...videoState, playing: !playing });
  };

  const handleMuted = () => {
    setVideoState({ ...videoState, muted: !muted });
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
            playing={playing}
            muted={muted}
          />
          <PlayerControl
            videoState={{ playing, muted }}
            handlers={{ handlePlayPause, handleMuted }}
          />
        </div>
      </div>
    </section>
  );
};
