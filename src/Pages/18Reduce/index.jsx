import { useState, useEffect, useRef } from 'react';
import { List, ListItemButton, ListItemText, Collapse } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

import styles from './styles.module.scss';

const ReduceTimePage = () => {
  const [open, setOpen] = useState(true);
  const [totalTime, setTotalTime] = useState({ hour: 0, min: 0, sec: 0 });
  const ref = useRef(null);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (!ref.current) return;
    const totalSec = [...ref.current.childNodes]
      .map(node => {
        const { time } = node.dataset;
        const [min, sec] = time.split(':');
        return parseFloat(min) * 60 + parseFloat(sec);
      })
      .reduce((total, vidSec) => total + vidSec);

    let remainSec = totalSec;
    const hour = Math.floor(remainSec / 3600);
    remainSec %= 3600;
    const min = Math.floor(remainSec / 60);
    remainSec %= 60;

    if (totalTime.hour === hour || totalTime.min === min || totalTime.sec === remainSec)
      return;

    setTotalTime({ hour, min, sec: remainSec });
  }, [ref.current]);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Total Time</h2>
          <p>{`${totalTime.hour}:${totalTime.min}:${totalTime.sec}`}</p>
        </div>

        <List
          sx={{ width: '100%', maxWidth: '360px', margin: '0 auto' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
        >
          <ListItemButton onClick={handleClick} sx={{ bgcolor: '#f1f1f1' }}>
            <ListItemText primary='Example Data' />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={open}
            timeout='auto'
            unmountOnExit
            sx={{
              bgcolor: '#fff',
              gap: '16px',
              maxHeight: '500px',
              overflowY: 'scroll',
            }}
          >
            <ul className={styles.videos} ref={ref}>
              <li data-time='5:43'>
                Video 1<span>5:43</span>
              </li>
              <li data-time='2:33'>
                Video 2<span>2:33</span>
              </li>
              <li data-time='3:45'>
                Video 3<span>3:45</span>
              </li>
              <li data-time='0:47'>
                Video 4<span>0:47</span>
              </li>
              <li data-time='5:21'>
                Video 5<span>5:21</span>
              </li>
              <li data-time='6:56'>
                Video 6<span>6:56</span>
              </li>
              <li data-time='3:46'>
                Video 7<span>3:46</span>
              </li>
              <li data-time='5:25'>
                Video 8<span>5:25</span>
              </li>
              <li data-time='3:14'>
                Video 9<span>3:14</span>
              </li>
              <li data-time='3:31'>
                Video 10<span>3:31</span>
              </li>
              <li data-time='5:59'>
                Video 11<span>5:59</span>
              </li>
              <li data-time='3:07'>
                Video 12<span>3:07</span>
              </li>
              <li data-time='11:29'>
                Video 13<span>11:29</span>
              </li>
              <li data-time='8:57'>
                Video 14<span>8:57</span>
              </li>
              <li data-time='5:49'>
                Video 15<span>7:49</span>
              </li>
            </ul>
          </Collapse>
        </List>
      </div>
    </section>
  );
};

export default ReduceTimePage;
