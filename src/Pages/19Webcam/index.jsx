import Webcam from 'react-webcam';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { filters } from './filter';
import { LayoutCol1 } from '@/Layouts';

const videoConstraints = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  aspectRatio: 0.6666666667,
  facingMode: 'user',
};

const WebCamPage = () => {
  const webcamRef = useRef(null);
  const imgCanvasRef = useRef(null);
  const imgObject = useRef(null);

  const [camOpen, setCamOpen] = useState(false);
  const [ctx, setCtx] = useState(null);
  const [originalPixels, setOriginalPixels] = useState(null);
  const [selectValue, setSelectedValue] = useState(filters[0].value);

  useEffect(() => {
    setCtx(imgCanvasRef.current.getContext('2d'));
  }, []);

  const takePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      const canvas = imgCanvasRef.current;
      const { width, height } = image;
      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(image, 0, 0);
      imgObject.current = image;
      setOriginalPixels(ctx.getImageData(0, 0, width, height));
      setSelectedValue(filters[0].value);
    };
  };

  return (
    <LayoutCol1 layout='full' baseClassName={styles.page}>
      <div className={styles.photobooth}>
        <div className={styles.filters}>
          {filters.map(filter => {
            const { id, value, label, func } = filter;
            return (
              <RadioInput
                key={id}
                label={label}
                onClick={() => {
                  setSelectedValue(value);
                  func?.(ctx, originalPixels);
                }}
                isDisabled={!originalPixels}
                isChecked={selectValue === value}
              />
            );
          })}
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
          {!originalPixels && <p>No Picture Now</p>}
          <canvas ref={imgCanvasRef} />
        </div>
      </div>
    </LayoutCol1>
  );
};

export default WebCamPage;

const RadioInput = ({ label, onClick, isDisabled, isChecked }) => {
  const className = `
  ${styles.button}
  ${isDisabled ? styles.disabled : ''}
  ${isChecked ? styles.checked : ''}
  `;

  return (
    <button className={className} onClick={() => onClick?.()}>
      {label}
    </button>
  );
};
