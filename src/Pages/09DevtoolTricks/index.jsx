import styles from './styles.module.scss';
import { data } from './data';
import { LayoutCol1 } from '@/Layouts';
import { Title } from '@/Components';

const DevtoolTricksPage = () => (
  <LayoutCol1 baseClassName={styles.page}>
    <Title title='Devtool Tricks' titleColor='#55476b' size='m' />
    {data.map((el, i) => {
      const num = String(i + 1).padStart(2, '0');
      return (
        <Trick
          key={el.id}
          title={`${num}. ${el.title}`}
          info={`${el.info}`}
          example={el.example}
          btnInfo={el.btnInfo}
          func={el.func}
        />
      );
    })}
  </LayoutCol1>
);

const Trick = ({ title, info, example, btnInfo, func }) => (
  <div className={styles.trick}>
    <h3>{title}</h3>
    <p>{info}</p>
    <div>
      <p>Code Example :</p>
      <span>{example}</span>
    </div>
    <button
      onClick={e => {
        e.preventDefault();
        e.stopPropagation();
        func?.();
      }}
    >
      {btnInfo}
    </button>
  </div>
);

export default DevtoolTricksPage;
