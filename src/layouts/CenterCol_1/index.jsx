import { Image } from '@/components';
import styles from './styles.module.scss';

export const CenterCol1Layout = ({ baseClassName, children, bgImages }) => {
  return (
    <section className={`${styles.base} ${baseClassName}`}>
      {bgImages && <Image images={bgImages} className={styles.bg} />}
      <div className={styles.container}>{children}</div>
    </section>
  );
};
