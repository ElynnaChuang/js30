import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FishIcon } from '@/Assets/09Icons';
import { Form, List } from '@/Components';
import styles from './styles.module.scss';
import { CenterCol1Layout } from '@/Layouts';

const LocalStoragePage = () => {
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

  const handleDone = e => {
    const { id } = e.target;
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
    <CenterCol1Layout baseClassName={styles.page}>
      <FishIcon />

      <div className={styles.wrapper}>
        <h2 className={styles.title}>LOCAL TAPAS</h2>
        <Form addItem={handleAddItem} />
        <List items={listItems} onClick={handleDone} />
        {!!listItems.length && <button onClick={handleClear}>Clear All</button>}
      </div>
    </CenterCol1Layout>
  );
};

export default LocalStoragePage;
