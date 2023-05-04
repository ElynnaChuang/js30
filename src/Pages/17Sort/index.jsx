import styles from './styles.module.scss';
import { itemsData } from './data';
import { Image } from '@/Components';
import { images } from '@/Assets/17bg';

const SortPage = () => {
  return (
    <section className={styles.page}>
      <Image images={images} className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Sorted Bands</h1>
          <p>sorting by name without articles</p>
        </div>
        <List items={itemsData} />
      </div>
    </section>
  );
};

export default SortPage;

export const List = ({ items = [] }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, name }) => (
        <ListItem key={id} id={id} name={name} />
      ))}
    </ul>
  );
};

const ListItem = ({ id, name }) => {
  return (
    <li className={styles.item} id={id}>
      {name}
    </li>
  );
};
