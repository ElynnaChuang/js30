import Webcam from 'react-webcam';
import { useCallback, useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles.module.scss';
import { RangeInput } from '@/Components';

const videoConstraints = {
  width: { min: 640, ideal: 1920 },
  height: { min: 400, ideal: 1080 },
  aspectRatio: 0.6666666667,
  facingMode: 'user',
};
const WebCamPage = () => {
  const webcamRef = useRef(null);
  const [screenshot, setScreenshot] = useState([]);
  const [camOpen, setCamOpen] = useState(false);

  const capture = useCallback(() => {
    if (!webcamRef.current) return;
    const imageSrc = webcamRef.current.getScreenshot();
    const newScreenshot = { id: uuidv4(), src: imageSrc };

    setScreenshot(prev => [newScreenshot, ...prev].slice(0, 10));
  }, [webcamRef]);

  useEffect(() => {
    if (!webcamRef.current) return;
    const getMedia = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        setCamOpen(true);
      } catch (err) {
        setCamOpen(false);
      }
    };

    getMedia();
  }, [webcamRef.current]);

  return (
    <section className={styles.page}>
      <div className={styles.photobooth}>
        <div className={styles.rgb}>
          <RangeInput label='R Min' name='rmin' min={0} max={255} initialValue={0} />

          <RangeInput label='R Max' name='rmax' min={0} max={255} initialValue={0} />

          <RangeInput label='G Min' name='gmin' min={0} max={255} initialValue={0} />

          <RangeInput label='G Max' name='gmax' min={0} max={255} initialValue={0} />

          <RangeInput label='B Min' name='bmin' min={0} max={255} initialValue={0} />

          <RangeInput label='B Max' name='bmax' min={0} max={255} initialValue={0} />
        </div>
        <div className={styles.video_container}>
          <Webcam
            mirrored
            ref={webcamRef}
            audio={false}
            videoConstraints={videoConstraints}
          />
          {camOpen ? (
            <button onClick={capture}>Take Photo</button>
          ) : (
            <h3>Camera Permission Denied</h3>
          )}
        </div>
        <div className={styles.screenshot}>
          {screenshot.map(({ id, src }) => (
            <img key={id} src={src} alt='screenshot' />
          ))}
        </div>
        {/* <div className={styles.strip}>{photos.map(photo => console.log(photo))}</div> */}

        {/* <canvas className={styles.photo} />
            height='100%' width='100%'
          */}
      </div>
    </section>
  );
};

export default WebCamPage;
