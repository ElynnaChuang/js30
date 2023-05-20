import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const EventPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title title='25 page' />
    </LayoutCol1>
  );
};

export default EventPage;
