import ReactPlayer from 'react-player';
import { useRef, useState } from 'react';
import video from '../../Assets/11video.mp4';

import { LayoutCol1 } from '@/Layouts';
import { Slider, Title } from '@/Components';
import styles from './styles.module.scss';

const SpeedControllerPage = () => {
  const videoPlayerRef = useRef(null);
  const [playRate, setPlayRate] = useState(1);

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='Video Speed Slider' size='s' titleClassName={styles.title} />
      <div className={styles.content}>
        <ReactPlayer
          url={video}
          style={{ display: 'flex' }}
          ref={videoPlayerRef}
          controls
          width='100%'
          height='auto'
          playbackRate={playRate}
        />
        <Slider playRate={playRate} setPlayRate={setPlayRate} />
      </div>
    </LayoutCol1>
  );
};

export default SpeedControllerPage;
