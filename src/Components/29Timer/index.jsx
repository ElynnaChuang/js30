import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function secToMin(secLeft) {
  const min = Math.floor(secLeft / 60);
  const sec = secLeft % 60;
  return { min, sec };
}

export const Timer = () => {
  const [start, setStart] = useState(false);

  const [timeValue, setTimeValue] = useState({ min: 0, sec: 0 });
  const [timeLeft, setTimeLeft] = useState({ min: 0, sec: 0 });

  useEffect(() => {
    let countDown;
    if (start) {
      let secLeft = timeValue.min * 60 + timeValue.sec;
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
    const { id, value } = e.target;
    setTimeValue(prev => ({ ...prev, [id]: Number(value) }));
  };

  const handleStart = () => {
    setStart(true);
  };

  const handlePause = () => {
    setTimeValue(timeLeft);
    setStart(false);
  };

  const handleReset = () => {
    setTimeValue({ min: 0, sec: 0 });
    setStart(false);
  };

  return (
    <div className={styles.timer}>
      <label htmlFor='min'>Min</label>
      <input
        id='min'
        type='number'
        min={0}
        max={59}
        value={start ? timeLeft.min : timeValue.min}
        onChange={start ? () => {} : handleInputValue}
        disabled={start}
      />

      <label htmlFor='sec'>Sec</label>
      <input
        id='sec'
        type='number'
        min={0}
        max={59}
        value={start ? timeLeft.sec : timeValue.sec}
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
