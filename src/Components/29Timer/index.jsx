import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

function secToMin(secLeft) {
  const min = Math.floor(secLeft / 60);
  const sec = secLeft % 60;
  return { min, sec };
}

function padStart(num) {
  if (num >= 10) return num;
  return String(num).padStart(2, 0);
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

  const handleAdjustTime = secAdjust => {
    const maxTotalSec = 59 * 60 + 59;
    const nowTotalSec = timeValue.min * 60 + timeValue.sec;

    if (nowTotalSec === 0 && secAdjust < 0) return;
    if (nowTotalSec === maxTotalSec && secAdjust > 0) return;

    const newTotalSec = nowTotalSec + secAdjust;

    if (newTotalSec < 0) {
      setTimeValue({ min: 0, sec: 0 });
    } else if (newTotalSec > maxTotalSec) {
      setTimeValue({ min: 59, sec: 59 });
    } else {
      setTimeValue(secToMin(newTotalSec));
    }
  };

  return (
    <div className={styles.timer}>
      <label htmlFor='min'>Min</label>
      <input
        id='min'
        type='number'
        min={0}
        max={59}
        value={start ? padStart(timeLeft.min) : padStart(timeValue.min)}
        onChange={start ? () => {} : handleInputValue}
        disabled={start}
      />

      <label htmlFor='sec'>Sec</label>
      <input
        id='sec'
        type='number'
        min={0}
        max={59}
        value={start ? padStart(timeLeft.sec) : padStart(timeValue.sec)}
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

      <button className={styles.btn} onClick={() => handleAdjustTime(15)}>
        +15s
      </button>
      <button className={styles.btn} onClick={() => handleAdjustTime(-15)}>
        -15s
      </button>

      <button className={styles.btn} onClick={() => handleAdjustTime(120)}>
        +2m
      </button>
      <button className={styles.btn} onClick={() => handleAdjustTime(-120)}>
        -2m
      </button>
    </div>
  );
};
