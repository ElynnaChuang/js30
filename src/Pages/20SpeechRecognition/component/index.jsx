import styles from './styles.module.scss';

const Button = ({ text, btnStyle, isActive, onClick }) => {
  const className = `${styles[btnStyle]} ${isActive ? styles.active : ''}`;

  return (
    <button className={className} type='button' onClick={() => onClick?.()}>
      {text}
    </button>
  );
};

const Select = ({ onChange, isDisable, options }) => {
  return (
    <select
      name='language'
      id='language'
      className={styles.select}
      onChange={e => onChange?.(e.target.value)}
      disabled={isDisable}
    >
      {options.map(({ value, name }) => (
        <option value={value} key={value}>
          {name}
        </option>
      ))}
    </select>
  );
};

export { Button, Select };
