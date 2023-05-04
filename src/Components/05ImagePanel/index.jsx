import { Image } from '../Image';
import styles from './styles.module.scss';

export const Panel = ({ id, text, images, isActive, handleActive }) => {
  const textArr = text.split(/(?=[A-Z])/); // split by uppercase
  const className = isActive ? styles.active_panel : styles.base_panel;
  return (
    <button
      className={className}
      onClick={() => (!isActive ? handleActive(id) : handleActive(0))}
    >
      <Image images={images} className={styles.bg} />
      <div className={styles.text_container}>
        {textArr.map(el => (
          <p key={el}>{el}</p>
        ))}
      </div>
    </button>
  );
};
