import styles from './styles.module.scss';

export const Button = ({ text, btnStyle = 'normal', disabled, onClick }) => {
  const btnStyleClass = styles[btnStyle];
  return (
    <button
      className={`${styles.btn} ${btnStyleClass}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
