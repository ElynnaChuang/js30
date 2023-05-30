import { useEffect, useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import { Hole } from './Hole';
import styles from './styles.module.scss';
import { Timer } from './Timer';
import { TimeNotification } from './Model';

const moles = Array.from({ length: 6 }, (_, i) => i + 1);

const getRandomIntervals = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let INTERVALS = getRandomIntervals(500, 800);

const MoleGamePage = () => {
  const [nowId, setNowId] = useState(null);
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

  const score = useRef(0);

  const handleGameStart = () => {
    score.current = 0;
    setStart(true);
  };

  useEffect(() => {
    const randomShow = setInterval(() => {
      if (start) {
        const id = Math.floor(Math.random() * moles.length) + 1;
        setNowId(id);

        INTERVALS = getRandomIntervals(400, 600);
      }
    }, INTERVALS);

    return () => {
      clearInterval(randomShow);
      setNowId(null);
    };
  }, [start]);

  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <Title title='Whack-a-mole!' size='m' titleClassName={styles.title} />
      <div className={styles.info}>
        <Timer
          startState={{ start, setStart }}
          time={{ min: 0, sec: 20 }}
          setEnd={setEnd}
          className={styles.time}
        />

        <div className={styles.score}>Score : {score.current}</div>

        <button className={styles.btn} onClick={handleGameStart} disabled={start}>
          Game Start!
        </button>
      </div>

      <div className={styles.holes}>
        {moles.map(id => (
          <Hole
            key={id}
            show={id === nowId}
            onClick={() => {
              score.current += 1;
            }}
          />
        ))}
      </div>

      <TimeNotification open={end} score={score.current} />
    </LayoutCol1>
  );
};

export default MoleGamePage;
