import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const FollowLinksPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='22 page' />
    </LayoutCol1>
  );
};

export default FollowLinksPage;
