import { Example } from '@/Components';
import { textExamples, arrayExamples, objectExamples } from './data';
import styles from './styles.module.scss';

export const ReferenceAndCopyPage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Array and Object</h2>
          <p>Reference vs Copy</p>
        </div>

        <div className={styles.example_section}>
          <h3>Text</h3>
          {textExamples.map(({ id, title, info, code }) => (
            <Example key={id} title={title} info={info} code={code} />
          ))}
        </div>

        <div className={styles.example_section}>
          <h3>Array</h3>
          {arrayExamples.map(({ id, title, info, code }) => (
            <Example key={id} title={title} info={info} code={code} />
          ))}
        </div>

        <div className={styles.example_section}>
          <h3>Object</h3>
          {objectExamples.map(({ id, title, info, code }) => (
            <Example key={id} title={title} info={info} code={code} />
          ))}
        </div>
      </div>
    </section>
  );
};
