import { useState } from 'react';
import styles from './styles.module.scss';

export const Form = ({ addItem }) => {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    addItem?.(input);
    setInput('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Item name'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type='submit' onClick={handleSubmit}>
        + Add Item
      </button>
    </form>
  );
};
