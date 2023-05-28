import { useEffect, useState } from 'react';
import { PlayArrowRounded, PauseRounded, RestartAltRounded } from '@mui/icons-material';
import styles from './styles.module.scss';

import { Button } from './Button';
import { TimeInput } from './TimeInput';
import { secToMin, padStart } from './helpers';
import { TimeNotification } from './Model';

export const Timer = () => {
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

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

          setEnd(true);
          setTimeout(() => setEnd(false), 1500);

          return clearInterval(countDown);
        }

        return setTimeLeft(() => secToMin(secLeft));
      }, 1000);
    }

    return () => clearInterval(countDown);
  }, [start]);

  const handleInputValue = e => {
    const { id, value, max, min } = e.target;
    if (value > Number(max))
      return setTimeValue(prev => ({ ...prev, [id]: Number(max) }));

    if (value < Number(min))
      return setTimeValue(prev => ({ ...prev, [id]: Number(min) }));

    return setTimeValue(prev => ({ ...prev, [id]: Number(value) }));
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
      <div className={styles.controls}>
        <div className={styles.time_value}>
          <Button text='-2m' onClick={() => handleAdjustTime(-120)} disabled={start} />
          <Button text='-15s' onClick={() => handleAdjustTime(-15)} disabled={start} />
          <Button text='-1s' onClick={() => handleAdjustTime(-1)} disabled={start} />
          <Button text='+1s' onClick={() => handleAdjustTime(1)} disabled={start} />
          <Button text='+15s' onClick={() => handleAdjustTime(15)} disabled={start} />
          <Button text='+2m' onClick={() => handleAdjustTime(120)} disabled={start} />
        </div>

        <div className={styles.time_run}>
          <Button
            icon={<RestartAltRounded />}
            text='Reset'
            onClick={handleReset}
            btnStyle='primary'
          />
          <Button
            btnStyle='primary'
            icon={<PlayArrowRounded />}
            text='Start'
            onClick={handleStart}
            disabled={start}
          />
          <Button
            btnStyle='primary'
            icon={<PauseRounded />}
            text='Pause'
            onClick={handlePause}
            disabled={!start}
          />
        </div>
      </div>

      <div className={styles.inputs}>
        <TimeInput
          id='min'
          label='Minutes'
          min={0}
          max={59}
          startCount={start}
          countdownValue={padStart(timeLeft.min)}
          inputValue={padStart(timeValue.min)}
          onChange={handleInputValue}
        />
        <span>:</span>
        <TimeInput
          id='sec'
          label='Seconds'
          min={0}
          max={59}
          startCount={start}
          countdownValue={padStart(timeLeft.sec)}
          inputValue={padStart(timeValue.sec)}
          onChange={handleInputValue}
        />
      </div>

      <TimeNotification open={end} />
    </div>
  );
};
