import { useState } from 'react';
import { ColorInput, RangeInput } from '@/Components';
import styles from './styles.module.scss';

const CssPlaygroundPage = () => {
  const [padding, setPadding] = useState(10);
  const [blur, setBlur] = useState(0);
  const [background, setBackground] = useState('#FACA7A');

  const imgStyle = {
    padding: `${padding}px`,
    background,
    filter: `blur(${blur}px)`,
  };

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Update CSS Variables with
          <span style={{ color: `${imgStyle.background}` }}>JS</span>
        </h2>

        <div className={styles.controls}>
          <RangeInput
            label='Spacing'
            name='spacing'
            min='10'
            max='200'
            initialValue={padding}
            handleCgange={setPadding}
          />
          <RangeInput
            label='Blur'
            name='blur'
            min='0'
            max='25'
            initialValue={blur}
            handleCgange={setBlur}
          />
          <ColorInput
            label='Base Color'
            name='base'
            initialValue={background}
            handleCgange={setBackground}
          />
        </div>

        <div className={styles.img_container}>
          <img
            src='https://source.unsplash.com/-G3rw6Y02D0/800x500'
            alt='...'
            style={imgStyle}
            className={styles.example_img}
          />
        </div>
      </div>
    </section>
  );
};

export default CssPlaygroundPage;
