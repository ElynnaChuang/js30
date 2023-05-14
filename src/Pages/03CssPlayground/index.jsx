import { useState } from 'react';
import { ColorInput, RangeInput, Image } from '@/Components';

import imageBase from '@/Assets/03Image/base.jpg';
import imageL1x from '@/Assets/03Image/image_l1x.webp';
import imageL2x from '@/Assets/03Image/image_l2x.webp';
import imageS1x from '@/Assets/03Image/image_s1x.webp';
import imageS2x from '@/Assets/03Image/image_s2x.webp';
import imageS3x from '@/Assets/03Image/image_s3x.webp';
import styles from './styles.module.scss';
import { LayoutCol1 } from '@/Layouts';

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
    <LayoutCol1 baseClassName={styles.page}>
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
      <Image
        className={styles.example_img}
        images={{
          base: imageBase,
          l1x: imageL1x,
          l2x: imageL2x,
          m1x: imageL1x,
          m2x: imageL2x,
          s1x: imageS1x,
          s2x: imageS2x,
          s3x: imageS3x,
        }}
        imgStyle={imgStyle}
      />
    </LayoutCol1>
  );
};

export default CssPlaygroundPage;
