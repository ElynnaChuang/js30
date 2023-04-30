import { useRef } from 'react';
import { useOnScreen } from './useOnScreen';
import styles from './styles.module.scss';

export const Paragraph = ({ text, image, imagePosition = 'L' }) => {
  const ref = useRef();
  const onScreen = image && useOnScreen(ref);
  const floatClassName = imagePosition === 'R' ? styles.float_right : styles.float_left;
  const imgClassname =
    imagePosition === 'R'
      ? onScreen
        ? styles.image_right_show
        : styles.image_right_hide
      : onScreen
      ? styles.image_left_show
      : styles.image_left_hide;

  return (
    <div className={styles.paragraph_container}>
      {image && (
        <div className={floatClassName} ref={ref}>
          <img src={image} alt='...' className={imgClassname} />
        </div>
      )}
      <div className={styles.text}>{text}</div>
    </div>
  );
};
