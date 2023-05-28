import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';
import { Hole } from './Hole';
import styles from './styles.module.scss';

const moles = Array.from({ length: 6 }, (_, i) => i);

const MoleGamePage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page} layout='full'>
      <Title title='Whack-a-mole!' subtitle={`score : ${0}`} size='m' />

      <button className={styles.btn} onClick={() => console.log('Game Start')}>
        Game Start!
      </button>

      <div className={styles.holes}>
        {moles.map(id => (
          <Hole key={id} />
        ))}
      </div>
    </LayoutCol1>
  );
};

export default MoleGamePage;
