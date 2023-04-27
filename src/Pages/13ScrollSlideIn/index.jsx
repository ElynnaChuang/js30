import { Paragraph } from '@/Components';
import { data } from './data';
import styles from './styles.module.scss';

export const ScrollSlideInPage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Slide in on Scroll</h1>
        {data.map(({ id, text, image, imagePosition }) => (
          <Paragraph key={id} text={text} image={image} imagePosition={imagePosition} />
        ))}
      </div>
    </section>
  );
};
