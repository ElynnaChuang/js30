import styles from './style.module.scss';

export const ModalContent = ({ score }) => {
  return (
    <div className={styles.container}>
      <div className={styles.backDrop} />
      <div className={styles.card}>
        <div className={styles.header}>Times Up!</div>
        <div>Your score is</div>
        <div className={styles.score}>{score}</div>
      </div>
    </div>
  );
};
