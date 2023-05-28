import styles from './styles.module.scss';

export const TimeInput = ({
  id,
  min,
  max,
  label,
  start,
  countdownValue,
  inputValue,
  onChange,
}) => {
  return (
    <div className={styles.time_input}>
      <label htmlFor='min'>{label}</label>
      <input
        id={id}
        type='number'
        min={min}
        max={max}
        value={start ? countdownValue : inputValue}
        onChange={start ? () => {} : onChange}
        disabled={start}
      />
    </div>
  );
};
