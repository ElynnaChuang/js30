import styles from './styles.module.scss';

export const List = ({ items = [], handleDone }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, name, done }) => (
        <ListItem key={id} name={name} done={done} onClick={() => handleDone?.(id)} />
      ))}
    </ul>
  );
};

const ListItem = ({ name, done, onClick }) => {
  return (
    <li className={`${styles.list_item} ${done ? styles.done : ''}`} onClick={onClick}>
      <p>{name}</p>
    </li>
  );
};
