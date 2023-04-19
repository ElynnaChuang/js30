import { useState } from 'react';
import { Panel } from '/src/Components';
import { panels } from './data';
import styles from './styles.module.scss';

export const ImageGalleryPage = () => {
  const [activePanelId, setActivePanel] = useState(0);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        {panels.map(panel => (
          <Panel
            key={panel.id}
            id={panel.id}
            text={panel.text}
            style={panel.style}
            isActive={activePanelId === panel.id}
            handleActive={setActivePanel}
          />
        ))}
      </div>
    </section>
  );
};
