import styles from './styles.module.scss';
import { itemsData } from './data';
import { images } from '@/assets/17bg';
import { CenterCol1Layout } from '@/layouts';
import { Title } from '@/components';

const noAriticle = word => {
  return word.replace(/^(a |an |the )/i, '');
};

const SortPage = () => {
  const sortedData = itemsData.sort((a, b) =>
    noAriticle(a.name) > noAriticle(b.name) ? 1 : -1,
  );

  return (
    <CenterCol1Layout bgImages={images}>
      <Title
        title='Sorted Bands'
        subtitle='sorting by name without articles'
        titleColor='#fff'
        size='m'
      />
      <List items={sortedData} />
    </CenterCol1Layout>
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
