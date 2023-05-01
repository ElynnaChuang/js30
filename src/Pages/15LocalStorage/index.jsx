import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FishIcon } from '@/Assets/09Icons';
import { Form, List } from '@/Components';
import styles from './styles.module.scss';

export const LocalStoragePage = () => {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem('items')) || [],
  );

  const handleAddItem = value => {
    if (!value.trim().length) return;

    const id = uuidv4();
    const newItem = { id, name: value, done: false };
    setListItems(prev => [...prev, newItem]);
    localStorage.setItem('items', JSON.stringify([...listItems, newItem]));
  };

  const handleDone = id => {
    setListItems(prev => prev.map(el => (el.id === id ? { ...el, done: !el.done } : el)));
    localStorage.setItem(
      'items',
      JSON.stringify(
        listItems.map(item => (item.id === id ? { ...item, done: !item.done } : item)),
      ),
    );
  };

  const handleClear = () => {
    setListItems([]);
    localStorage.removeItem('items');
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <FishIcon />

        <div className={styles.wrapper}>
          <h2 className={styles.title}>LOCAL TAPAS</h2>
          <Form addItem={handleAddItem} />
          <List items={listItems} handleDone={handleDone} />
          {!!listItems.length && <button onClick={handleClear}>Clear All</button>}
        </div>
      </div>
    </section>
  );
};
