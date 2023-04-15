import styles from './styles.module.scss';

export const Panel = ({ id, style, text, isActive, handleActive }) => {
  const textArr = text.split(/(?=[A-Z])/); // split by uppercase
  const className = isActive ? styles.active_panel : styles.base_panel;
  return (
    <button
      className={className}
      style={style}
      onClick={() => (!isActive ? handleActive(id) : handleActive(0))}
    >
      <div className={styles.text_container}>
        {textArr.map(el => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </button>
  );
};
