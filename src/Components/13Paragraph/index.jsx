import styles from './styles.module.scss';

export const Paragraph = ({ text, image, imagePosition = 'L' }) => {
  const className = imagePosition === 'R' ? styles.float_right : styles.float_left;

  return (
    <div className={styles.paragraph_container}>
      {image && (
        <div className={className}>
          <img src={image} alt='...' />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
};
