import { Paragraph, Title } from '@/components';
import { data } from './data';
import styles from './styles.module.scss';
import { CenterCol1Layout } from '@/Layouts';

const ScrollSlideInPage = () => {
  return (
    <CenterCol1Layout baseClassName={styles.page}>
      <Title title='Slide in on Scroll' titleColor='#fa9150' size='s' />
      {data.map(({ id, text, image, imagePosition }) => (
        <Paragraph key={id} text={text} image={image} imagePosition={imagePosition} />
      ))}
    </CenterCol1Layout>
  );
};

export default ScrollSlideInPage;
