import { useEffect, useState } from 'react';

import { secToMin, padStart } from '@/Components/29Timer/helpers';

export const Timer = ({ time, startState, setEnd, className }) => {
  const { start, setStart } = startState;
  const intialTime = time || { min: 0, sec: 10 };

  const [timeLeft, setTimeLeft] = useState(intialTime);

  useEffect(() => {
    let countDown;
    if (start) {
      let secLeft = intialTime.min * 60 + intialTime.sec;
      setTimeLeft(() => secToMin(secLeft));

      countDown = setInterval(() => {
        secLeft -= 1;

        if (secLeft < 0) {
          setStart(false);

          setEnd(true);
          setTimeout(() => setEnd(false), 2000);

          return clearInterval(countDown);
        }

        return setTimeLeft(() => secToMin(secLeft));
      }, 1000);
    }

    return () => clearInterval(countDown);
  }, [start]);

  return (
    <div className={className}>
      {padStart(timeLeft.min)} : {padStart(timeLeft.sec)}
    </div>
  );
};
