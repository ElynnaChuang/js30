import { useEffect, useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import { Hole } from './Hole';
import styles from './styles.module.scss';

const moles = Array.from({ length: 6 }, (_, i) => i + 1);
const INTERVALS = 600;

const MoleGamePage = () => {
  const [nowId, setNowId] = useState(null);
  const [start, setStart] = useState(false);
  const score = useRef(0);

  useEffect(() => {
    const randomShow = setInterval(() => {
      if (start) {
        const id = Math.floor(Math.random() * moles.length) + 1;
        setNowId(id);
      }
    }, INTERVALS);

    return () => {
      clearInterval(randomShow);
      setNowId(null);
    };
  }, [start]);

  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <Title title='Whack-a-mole!' subtitle={`score : ${score.current}`} size='m' />

      <button className={styles.btn} onClick={() => setStart(!start)}>
        Game Start!
      </button>

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
    </LayoutCol1>
  );
};

export default MoleGamePage;
