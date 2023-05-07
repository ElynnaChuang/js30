import Webcam from 'react-webcam';
import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { RangeInput } from '@/Components';

const videoConstraints = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  aspectRatio: 0.6666666667,
  facingMode: 'user',
};

const WebCamPage = () => {
  const webcamRef = useRef(null);
  const imgCanvasRef = useRef(null);
  const [camOpen, setCamOpen] = useState(false);

  const takePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = imgCanvasRef.current;
      const ctx = canvas.getContext('2d');

      canvas.width = image.width;
      canvas.height = image.height;

      ctx.drawImage(image, 0, 0);
    };
  };

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
            onCanPlay={() => setCamOpen(true)}
            minScreenshotWidth={1920}
            minScreenshotHeight={1080}
            screenshotFormat='image/jpeg'
          />
          {camOpen ? (
            <button onClick={takePhoto}>Take Photo</button>
          ) : (
            <h3>Camera Permission Denied</h3>
          )}
        </div>
        <div className={styles.screenshot}>
          <canvas ref={imgCanvasRef} />
        </div>
      </div>
    </section>
  );
};

export default WebCamPage;
