import { useState } from 'react';
import styles from './styles.module.scss';

const MouseMovePage = () => {
  const [shadow, setShadow] = useState({ x: 0, y: 0 });
  const style = {
    textShadow: `
    ${-shadow.x}px ${-shadow.y}px 0px rgba(0, 255, 229, 0.8),
    ${shadow.x}px ${-shadow.y}px 0px rgba(255, 247, 0, 0.8),
    ${-shadow.x}px ${shadow.y}px 0px rgba(255, 55, 178, 0.8),
    ${shadow.x}px ${shadow.y}px 0px rgba(67, 255, 108, 0.8)`,
  };

  const handleShadow = e => {
    const { offsetWidth: width, offsetHeight: height } = e.nativeEvent.toElement;
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    const walk = 100;
    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    setShadow({ x: xWalk, y: yWalk });
  };

  return (
    <section className={styles.page}>
      <div className={styles.container} onMouseMove={handleShadow}>
        <h1 style={style}>🔥Move Your Mouse!</h1>
      </div>
    </section>
  );
};

export default MouseMovePage;
