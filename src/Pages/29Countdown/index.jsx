import { LayoutCol1 } from '@/Layouts';
import { Timer, Title } from '@/Components';
import styles from './styles.module.scss';

const CountdownPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <Title title='Countdown' titleClassName={styles.title} />
      <Timer />
    </LayoutCol1>
  );
};

export default CountdownPage;
