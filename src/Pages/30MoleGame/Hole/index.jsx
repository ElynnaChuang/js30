import { ReactComponent as Dirt } from '@/Assets/30images/dirt.svg';
import { ReactComponent as Mole } from '@/Assets/30images/mole.svg';

import styles from './styles.module.scss';

export const Hole = ({ show, onClick }) => {
  return (
    <div className={styles.hole}>
      <Dirt className={styles.dirt} />
      <Mole className={show ? styles.mole_show : styles.mole_hide} onClick={onClick} />
    </div>
  );
};
