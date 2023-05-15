import { useEffect, useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const items = ['Apple', 'Mongo', 'Banana', 'Watermelon'].map((el, i) => ({
  id: i,
  name: el,
}));

const FollowLinksPage = () => {
  const listRef = useRef(null);
  const [highlightInfo, setHighlightInfo] = useState({
    width: 50,
    height: 20,
    opacity: 0,
  });

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const { left, top } = list.getBoundingClientRect();
    const childHeight = list.firstChild.getBoundingClientRect().height;
    setHighlightInfo(prev => ({
      ...prev,
      height: childHeight,
      left,
      top: top + childHeight / 2,
    }));
  }, []);

  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <div
        className={styles.highlight}
        style={{
          width: `${highlightInfo.width}px`,
          height: `${highlightInfo.height}px`,
          transform: `translate(${highlightInfo.left}px, ${highlightInfo.top}px)`,
          opacity: highlightInfo.opacity,
        }}
      />
      <Title
        title='Use your mouse to hover links'
        size='s'
        titleClassName={styles.title}
      />
      <ul className={styles.menu} ref={listRef}>
        {items.map(item => (
          <li
            key={item.id}
            className={styles.item}
            onMouseEnter={e => {
              const { width, height, left, top } = e.target.getBoundingClientRect();
              setHighlightInfo({ width, height, left, top, opacity: 1 });
            }}
            onMouseLeave={() => setHighlightInfo({ opacity: 0 })}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </LayoutCol1>
  );
};

export default FollowLinksPage;
