import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import styles from './styles.module.scss';

const CountdownPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <Title title='Countdown' />
    </LayoutCol1>
  );
};

export default CountdownPage;
