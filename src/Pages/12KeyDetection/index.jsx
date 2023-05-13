import { useRef, useEffect } from 'react';
import JSConfetti from 'js-confetti';
import styles from './styles.module.scss';
import confettiSetting from './confettiSetting';
import { LayoutCol1 } from '@/Layouts';

const SECRET_CODE = 'yay';
let jsConfetti;

const KeyDetectionPage = () => {
  const canvasRef = useRef(null);
  const pressed = [];

  const generateConfetti = e => {
    e.stopPropagation();

    const randomNum = Math.floor(Math.random() * confettiSetting.length);
    const setting = confettiSetting[randomNum];

    jsConfetti.addConfetti(setting);
  };

  const handleKeyUp = e => {
    e.stopPropagation();
    const locationArr = window.location.pathname.split('/');
    const url = locationArr[locationArr.length - 1];
    if (url !== '12') return;

    const { key } = e;
    pressed.push(key);
    pressed.splice(0, pressed.length - SECRET_CODE.length); // pressed.length 永遠不會超過 SECRET_CODE.length
    if (pressed.join('').includes(SECRET_CODE)) {
      generateConfetti(e);
    }
  };

  useEffect(() => {
    if (canvasRef.current) jsConfetti = new JSConfetti({ canvasRef });
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      if (jsConfetti) jsConfetti.clearCanvas();
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <div className={styles.info}>
        You can enter <span>{SECRET_CODE}</span> or click{' '}
        <button className={styles.button} onClick={generateConfetti}>
          Button
        </button>{' '}
        to get happiness!
      </div>
      <div className={styles.canvas_container}>
        <canvas ref={canvasRef} height='100%' className={styles.canvas} />
      </div>
    </LayoutCol1>
  );
};

export default KeyDetectionPage;
