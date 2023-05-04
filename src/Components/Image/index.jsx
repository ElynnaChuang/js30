import { useInView } from 'react-intersection-observer';
import phJpg from '@/Assets/Homepage/placeholder.jpg';
import styles from './styles.module.scss';

export const Image = ({ images, className, imgStyle }) => {
  const { s1x, s2x, s3x, m1x, m2x, m3x, l1x, l2x, l3x, base } = images;
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className={`${styles.img_container} ${className}`}>
      <picture>
        {(l1x || l2x || l3x) && (
          <source
            media='(min-width: 992px)'
            srcSet={inView ? `${l1x} 1x, ${l2x} 2x, ${l3x} 3x` : ''}
            type='image/webp'
          />
        )}

        {(m1x || m2x || m3x) && (
          <source
            media='(max-width: 991px)'
            srcSet={inView ? `${m1x} 1x, ${m2x} 2x, ${m3x} 3x` : ''}
            type='image/webp'
          />
        )}

        {(s1x || s2x || s3x) && (
          <source
            media='(max-width: 575px)'
            srcSet={inView ? `${s1x} 1x, ${s2x} 2x, ${s3x} 3x` : ''}
            type='image/webp'
          />
        )}
        <img
          ref={ref}
          src={inView ? base : phJpg}
          alt='...'
          loading='lazy'
          className={styles.img}
          style={imgStyle}
        />
      </picture>
    </div>
  );
};
