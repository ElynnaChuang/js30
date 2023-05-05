import { Link } from 'react-router-dom';
import { Image } from '../Image/index.jsx';
import styles from './styles.module.scss';

export const Card = ({ linkTo, title, images, focus }) => {
  return (
    <Link to={linkTo} preventScrollReset={false}>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <div className={styles.img_container}>
            <Image images={images} />
          </div>
        </div>
        <div className={styles.card_info}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.focus}>focus : {focus}</p>
        </div>
      </div>
    </Link>
  );
};
