import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FishIcon } from '@/Assets/09Icons';
import { Form, List } from '@/Components';
import styles from './styles.module.scss';

export const LocalStoragePage = () => {
  const [listItems, setListItems] = useState([]);

  const handleAddItem = value => {
    if (!value.trim().length) return;

    const id = uuidv4();
    setListItems(prev => [...prev, { id, name: value, done: false }]);
  };

  const handleDone = id => {
    setListItems(prev => prev.map(el => (el.id === id ? { ...el, done: !el.done } : el)));
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <FishIcon />

        <div className={styles.wrapper}>
          <h2 className={styles.title}>LOCAL TAPAS</h2>
          <Form addItem={handleAddItem} />
          <List items={listItems} handleDone={handleDone} />
        </div>
      </div>
    </section>
  );
};
