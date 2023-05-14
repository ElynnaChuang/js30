import { Image } from '@/Components';
import styles from './styles.module.scss';

export const LayoutCol1 = ({ baseClassName, children, bgImages, layout }) => {
  const layoutClass = layout === 'full' ? styles.layout_full : styles.layout_center_col;
  return (
    <section className={`${styles.base} ${baseClassName}`}>
      {bgImages && <Image images={bgImages} className={styles.bg} />}
      <div className={layoutClass}>{children}</div>
    </section>
  );
};
