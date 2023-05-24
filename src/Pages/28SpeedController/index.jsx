import ReactPlayer from 'react-player';
import { useRef } from 'react';
import video from '../../Assets/11video.mp4';

import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const SpeedControllerPage = () => {
  const videoPlayerRef = useRef(null);
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='Video Speed Slider' size='s' />
      <div className={styles.content}>
        <ReactPlayer
          url={video}
          style={{ display: 'flex' }}
          ref={videoPlayerRef}
          controls
          width='100%'
          height='auto'
        />
        <div className={styles.speed}>
          <div className={styles.speed_bar}>1×</div>
        </div>
      </div>
    </LayoutCol1>
  );
};

export default SpeedControllerPage;
