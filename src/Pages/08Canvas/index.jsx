import { CanvasArea } from '@/Components';
import styles from './styles.module.scss';

export const CanvasPage = () => {
  const title = 'Start painting what you want!';

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {title}
          <div>{title}</div>
        </h2>
        <div className={styles.canvas_area}>
          <CanvasArea />
        </div>
      </div>
    </section>
  );
};
