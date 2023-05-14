import { Example, Title } from '@/Components';
import { textExamples, arrayExamples, objectExamples, deepCopyExamples } from './data';
import styles from './styles.module.scss';
import { LayoutCol1 } from '@/Layouts';

const ReferenceAndCopyPage = () => {
  return (
    <LayoutCol1 baseClassName={styles.page}>
      <Title
        title='Array and Object'
        subtitle='Reference vs Copy'
        titleClassName={styles.title}
        size='m'
      />

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

      <div className={styles.example_section}>
        <h3>Notice!!</h3>
        {deepCopyExamples.map(({ id, title, info, subInfo, code }) => (
          <Example key={id} title={title} info={info} subInfo={subInfo} code={code} />
        ))}
      </div>
    </LayoutCol1>
  );
};

export default ReferenceAndCopyPage;
