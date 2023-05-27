import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function secToMin(secLeft) {
  const min = Math.floor(secLeft / 60);
  const sec = secLeft % 60;
  return { min, sec };
}

export const Timer = () => {
  const [start, setStart] = useState(false);

  const [secValue, setSecValue] = useState(0);
  const [timeLeft, setTimeLeft] = useState(() => secToMin(0));

  useEffect(() => {
    let countDown;
    if (start) {
      let secLeft = secValue;
      setTimeLeft(() => secToMin(secLeft));

      countDown = setInterval(() => {
        secLeft -= 1;

        if (secLeft < 0) {
          setStart(false);
          return clearInterval(countDown);
        }

        return setTimeLeft(() => secToMin(secLeft));
      }, 1000);
    }

    return () => clearInterval(countDown);
  }, [start]);

  const handleInputValue = e => {
    const newSec = Number(e.target.value);
    setSecValue(newSec);
  };

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setStart(false);
    setSecValue(timeLeft.sec);
  };

  const handleReset = () => {
    setSecValue(0);
    setStart(false);
  };

  return (
    <div className={styles.timer}>
      <label htmlFor='second'>Sec</label>
      <input
        id='second'
        type='number'
        min={0}
        max={59}
        value={start ? timeLeft.sec : secValue}
        onChange={start ? () => {} : handleInputValue}
        disabled={start}
      />

      <button className={styles.btn} onClick={handleStart}>
        Start
      </button>

      <button className={styles.btn} onClick={handlePause}>
        Pause
      </button>

      <button className={styles.btn} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
