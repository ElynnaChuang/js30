import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';

import styles from './styles.module.scss';

const StickyNavPage = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </nav>

      <LayoutCol1 baseClassName={styles.content_section}>
        <Title title='24 page' />
      </LayoutCol1>
    </div>
  );
};

export default StickyNavPage;
