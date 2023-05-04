import styles from './styles.module.scss';

export const List = ({ items = [], onClick }) => {
  return (
    <ul className={styles.list}>
      {items.map(({ id, name, done }) => (
        <ListItem key={id} id={id} name={name} done={done} onClick={onClick} />
      ))}
    </ul>
  );
};

const ListItem = ({ id, name, done, onClick }) => {
  return (
    <li
      className={`${styles.list_item} ${done ? styles.done : ''}`}
      id={id}
      onClick={() => onClick?.()}
    >
      <p>{name}</p>
    </li>
  );
};
