import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const CheckboxInput = ({ id, content, checkedStatus }) => {
  const [isChecked, setIsChecked] = useState(checkedStatus);
  const className = isChecked ? styles.checked : styles.default;

  const handleChange = event => {
    const { checked } = event.target;
    setIsChecked(checked);
  };

  useEffect(() => {
    setIsChecked(checkedStatus);
  }, [checkedStatus]);

  return (
    <div className={className}>
      <input
        type='checkbox'
        id={id}
        onChange={e => handleChange(e)}
        checked={isChecked}
      />
      <label htmlFor={id} onClick={e => e.stopPropagation()}>
        {content}
      </label>
    </div>
  );
};
