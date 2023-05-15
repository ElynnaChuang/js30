import styles from './styles.module.scss';

export const Select = ({ name, selectClass, onChange, isDisable, options }) => {
  return (
    <select
      name={name}
      className={`${styles.select} ${selectClass}`}
      onChange={e => onChange?.(e.target.value)}
      disabled={isDisable}
    >
      {options.map(option => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
