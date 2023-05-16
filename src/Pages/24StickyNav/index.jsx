import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import { LayoutCol1 } from '@/Layouts';
import { Image, Title } from '@/Components';

import styles from './styles.module.scss';
import { bannerImages, paragraphImages } from './data';

const StickyNavPage = () => {
  return (
    <div className={styles.page}>
      <Fade
        duration={3000}
        cssClass={styles.banner}
        prevArrow={<ArrowBackIosNew sx={{ color: '#fff' }} />}
        nextArrow={<ArrowForwardIos sx={{ color: '#fff' }} />}
      >
        {bannerImages.map(image => (
          <Image key={image.caption} images={{ base: image.url }} />
        ))}
      </Fade>
      <nav className={styles.nav}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      <LayoutCol1 baseClassName={styles.content_section}>
        <Title title='Sticky Nav' titleColor='#777' size='m' />
        {paragraphImages.map((image, i) =>
          (i + 1) % 2 === 0 ? (
            <Paragraph key={image.key} image={image.url} imgPosition='right' />
          ) : (
            <Paragraph key={image.key} image={image.url} imgPosition='left' />
          ),
        )}
      </LayoutCol1>
    </div>
  );
};

export default StickyNavPage;

const Paragraph = ({ image, imgPosition }) => {
  const positionClass =
    imgPosition === 'right' ? styles.paragraph_right : styles.paragraph_left;

  return (
    <div className={`${styles.paragraph} ${positionClass}`}>
      <Image images={{ base: image }} className={styles.img} />

      <div className={styles.info}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore tempora rerum,
          est autem cupiditate, corporis a qui libero ipsum delectus quidem dolor at
          nulla, adipisci veniam in reiciendis aut asperiores omnis blanditiis quod quas
          laborum nam! Fuga ad tempora in aspernatur pariatur fugit quibusdam dolores sunt
          esse magni, ut, dignissimos.
        </p>
        <button>
          Learn more <ArrowForwardIos sx={{ color: '#999' }} />
        </button>
      </div>
    </div>
  );
};
