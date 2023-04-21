import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Card = ({ linkTo, title, image }) => {
  return (
    <div className={styles.card}>
      <Link to={linkTo} preventScrollReset={false}>
        <div className={styles.card_img}>
          <div className={styles.img_container}>
            <img src={image} alt='...' />
          </div>
        </div>
        <h2 className={styles.card_title}>{title}</h2>
      </Link>
    </div>
  );
};
