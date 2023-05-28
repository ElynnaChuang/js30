import styles from './style.module.scss';

export const ModalContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.backDrop} />
      <div className={styles.card}>Times Up!</div>
    </div>
  );
};
