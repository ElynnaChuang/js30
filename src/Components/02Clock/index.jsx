import { useEffect, useRef, useState } from 'react';

import dayjs from '@/Helpers/dayjs';
import styles from './styles.module.scss';

export const Clock = ({ timezone }) => {
  const addZero = data => data.toString().padStart(2, 0);
  const initialTime = dayjs().tz(timezone);

  const [hour, setHour] = useState(() => addZero(initialTime.hour()));
  const [minute, setMinute] = useState(() => addZero(initialTime.minute()));
  const [second, setSecond] = useState(() => addZero(initialTime.second()));

  const hourRound = useRef(0);
  const minRound = useRef(0);
  const secRound = useRef(0);

  // 1 hr = 30deg , 1m = 30deg/60 , 1s = 30deg/3600 (s 可以幾乎不計)
  const hourDeg = (hour / 12 + hourRound.current) * 360 + (minute / 60) * 30;
  const minDeg = (minute / 60 + minRound.current) * 360 + (second / 60) * 6;
  const secDeg = (second / 60 + secRound.current) * 360;

  useEffect(() => {
    const getTime = () => {
      const currentTime = dayjs().tz(timezone);
      const currentHour = addZero(currentTime.hour());
      const currentMin = addZero(currentTime.minute());
      const currentSec = addZero(currentTime.second());
      if (
        currentTime.format('HH:mm:ss') === '00:00:00' ||
        currentTime.format('HH:mm:ss') === '12:00:00'
      )
        hourRound.current += 1;
      if (currentMin === '00' && currentSec === '00') minRound.current += 1;
      if (currentSec === '00') secRound.current += 1;

      setHour(currentHour);
      setMinute(currentMin);
      setSecond(currentSec);
    };
    const timerId = setInterval(getTime, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  }, [timezone]);
  return (
    <div className={styles.clock}>
      <div className={styles.clock_face}>
        <div className={styles.scales}>
          <span className={styles.hour_scale} />
          <span className={styles.hour_scale} />
          <span className={styles.hour_scale} />
          <span className={styles.hour_scale} />
          <span className={styles.hour_scale} />
          <span className={styles.hour_scale} />
        </div>

        <div
          className={styles.sec_pointer}
          style={{ transform: `rotate(${secDeg}deg)` }}
        />
        <div
          className={styles.min_pointer}
          style={{ transform: `rotate(${minDeg}deg)` }}
        />
        <div
          className={styles.hour_pointer}
          style={{ transform: `rotate(${hourDeg}deg)` }}
        />
      </div>
    </div>
  );
};
