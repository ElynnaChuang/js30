import { useRef, useState } from 'react';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const items = Array.from({ length: 25 }, (el, i) => ({
  name: (i + 1).toString().padStart(2, 0),
  id: i,
}));

const getXPosition = (event, areaDOM) => {
  if (!areaDOM) return 0;

  const { pageX } = event;
  const pageSpace = areaDOM.getBoundingClientRect().left;
  return pageX - pageSpace;
};

const MOVE_RATIO = 5; // 實際移動:滑鼠移動

const ClickAndDragPage = () => {
  const scrollAreaRef = useRef();
  const [isDown, setIsDown] = useState(false);
  const [scrollInfo, setScrollInfo] = useState({ startX: 0, scrollLeft: 0 });

  const handleMouseDown = e => {
    setIsDown(true);

    const scrollArea = scrollAreaRef.current;
    const startX = getXPosition(e, scrollArea);
    const { scrollLeft } = scrollArea; // scroll bar ＆左邊距離
    setScrollInfo({ startX, scrollLeft });
  };
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  const handleMouseUp = () => {
    setIsDown(false);
  };
  const handleMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const scrollArea = scrollAreaRef.current;

    const maxScrollLeft = scrollArea.scrollWidth - scrollArea.clientWidth;
    const newX = getXPosition(e, scrollArea);
    const moveDistance = (scrollInfo.startX - newX) * MOVE_RATIO;
    const newScrollLeft = scrollInfo.scrollLeft + moveDistance;

    // (scrollWidth：捲動範圍總寬 / clientWidth：可視範圍寬 / scrollLeft：超出可視範圍的寬)
    scrollArea.scrollLeft = newScrollLeft > maxScrollLeft ? maxScrollLeft : newScrollLeft;
  };

  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='27 page' />
      <div className={styles.container}>
        <div
          ref={scrollAreaRef}
          role='button'
          tabIndex={0}
          className={`${styles.scroll_items} ${isDown ? styles.active : ''}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {items.map(({ id, name }) => (
            <div className={styles.item} key={id}>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className={styles.shadow} />
      </div>
    </LayoutCol1>
  );
};

export default ClickAndDragPage;
