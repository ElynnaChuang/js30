import styles from './styles.module.scss';
import { data } from './data';

export const DevtoolTricksPage = () => (
  <section className={styles.page}>
    <div className={styles.container}>
      <h2 className={styles.title}>Devtool Tricks</h2>
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
    </div>
  </section>
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
