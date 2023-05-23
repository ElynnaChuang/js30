import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const items = Array.from({ length: 25 }, (el, i) => ({
  name: (i + 1).toString().padStart(2, 0),
  id: i,
}));

const ClickAndDragPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='27 page' />
      <div className={styles.container}>
        <div className={styles.scroll_items}>
          {items.map(({ id, name }) => (
            <div className={styles.item} key={id}>
              <p>{name}</p>
            </div>
          ))}
        </div>
        <div className={styles.shadow} />
      </div>
    </LayoutCol1>
  );
};

export default ClickAndDragPage;
