import { useEffect, useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const EventPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='Event Capture' titleColor='#777' />

      <Div areaName='A area' areaClass={styles.area_a}>
        <Div areaName='B area' areaClass={styles.area_b}>
          <Div areaName='C area' areaClass={styles.area_c} />
        </Div>
      </Div>
    </LayoutCol1>
  );
};

export default EventPage;

const Div = ({ areaName, areaClass, children }) => {
  const ref = useRef(0);

  const [clickNum, setClickNum] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const hintClass = isShow ? styles.hintShow : styles.hintHide;

  useEffect(() => {
    if (!ref.current || !clickNum) {
      ref.current += 1;
    } else {
      setIsShow(true);
      setTimeout(() => setIsShow(false), 1000);
    }
  }, [clickNum]);

  return (
    <div
      className={areaClass}
      onClick={() => setClickNum(prev => prev + 1)}
      role='button'
      tabIndex={0}
    >
      <div>
        <span>{areaName}</span>
        <span className={hintClass}>+1</span>
      </div>
      <p>Clicked Times : {clickNum}</p>
      {children}
    </div>
  );
};
