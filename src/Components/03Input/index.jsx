import { useState } from 'react';
import styles from './styles.module.scss';

export const RangeInput = ({ label, name, initialValue, min, max, handleCgange }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
    handleCgange?.(e.target.value);
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{`${label} : ${value}`}</label>
      <input
        type='range'
        id={name}
        name={name}
        min={min}
        max={max}
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  );
};

export const ColorInput = ({ label, name, initialValue, handleCgange }) => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => {
    setValue(e.target.value);
    handleCgange?.(e.target.value);
  };

  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{label}</label>
      <input
        type='color'
        id={name}
        name={name}
        value={value}
        onChange={e => onChange(e)}
      />
    </div>
  );
};
