import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

export const Key = ({ keyName, soundTag, currentKey, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const className = isActive ? styles.active_key : styles.default_key;
  const handleStyle = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 200);
  };

  useEffect(() => {
    if (currentKey === keyName.toLowerCase()) handleStyle();
  }, [keyName, currentKey]);

  return (
    <button
      tabIndex='0'
      className={className}
      onClick={() => {
        onClick?.();
        handleStyle();
      }}
    >
      <kbd>{keyName}</kbd>
      <span className={styles.soundTag}>{soundTag}</span>
    </button>
  );
};
