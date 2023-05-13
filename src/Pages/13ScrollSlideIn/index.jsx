import { Paragraph, Title } from '@/Components';
import { data } from './data';
import styles from './styles.module.scss';
import { LayoutCol1 } from '@/Layouts';

const ScrollSlideInPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='Slide in on Scroll' titleColor='#fa9150' size='s' />
      {data.map(({ id, text, image, imagePosition }) => (
        <Paragraph key={id} text={text} image={image} imagePosition={imagePosition} />
      ))}
    </LayoutCol1>
  );
};

export default ScrollSlideInPage;
