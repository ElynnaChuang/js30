import { Link } from 'react-router-dom';
import { Image } from '../Image/index.jsx';
import styles from './styles.module.scss';

export const Card = ({ linkTo, title, images }) => {
  return (
    <div className={styles.card}>
      <Link to={linkTo} preventScrollReset={false}>
        <div className={styles.card_img}>
          <div className={styles.img_container}>
            <Image images={images} />
          </div>
        </div>
        <h2 className={styles.card_title}>{title}</h2>
      </Link>
    </div>
  );
};
