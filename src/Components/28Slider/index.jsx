import { useRef, useState } from 'react';
import styles from './styles.module.scss';

function roundUp(num) {
  return Math.round(num * 100) / 100;
}

export const Slider = ({ playRate, setPlayRate }) => {
  const MIN_RATE = 0.5;
  const MAX_RATE = 3;
  const intialHeight = ((playRate - MIN_RATE) / (MAX_RATE - MIN_RATE)) * 100;

  const [barHeight, setBarHeight] = useState(intialHeight);
  const [isClick, setIsClick] = useState(false);
  const speedRef = useRef();

  const handleMouseDown = () => {
    setIsClick(true);
  };

  const handleMouseMove = e => {
    if (!isClick) return;
    const rect = e.target.getBoundingClientRect();
    const { top, height } = rect;

    const mouseToTop = e.pageY - top;

    const percent = roundUp((height - mouseToTop) / height);
    setBarHeight(percent * 100);

    const rate = roundUp((MAX_RATE - MIN_RATE) * percent + MIN_RATE);
    setPlayRate(rate);
  };

  const handleMouseUp = () => {
    setIsClick(false);
  };

  return (
    <div className={styles.slider_container}>
      <div
        className={styles.bar}
        ref={speedRef}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        role='button'
        tabIndex={0}
      >
        <div className={styles.color} style={{ height: `${barHeight}%` }} />
      </div>
      <span className={styles.num}>{playRate} X</span>
    </div>
  );
};
