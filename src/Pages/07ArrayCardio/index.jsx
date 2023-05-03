import { Link } from 'react-router-dom';
import { StyledTable } from '@/Components';
import { people, comments } from './data';
import styles from './styles.module.scss';

const ArrayCardioPage02 = () => {
  const prinaryColor = '#9363ad';
  const thisYear = new Date().getFullYear();

  const hasAtLeast19 = people.some(person => thisYear - person.year >= 19);
  const isEvery19 = people.every(person => thisYear - person.year === 19);
  // 05 Delete comment
  const deleteIndex = comments.findIndex(comment => comment.id === 823423);
  const newArr = [...comments];
  newArr.splice(deleteIndex, 1);

  return (
    <section className={styles.page}>
      <div className={styles.title} style={{ color: prinaryColor }}>
        ArrayCardio v2
        <Link to='/04' className={styles.link}>
          Go to ArrayCardio v1 page
        </Link>
      </div>
      <div className={styles.container}>
        <StyledTable
          title='01. All people'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={people}
        />

        <StyledTable
          title={`02. Is at least one person 19? (Answer: ${
            hasAtLeast19 ? 'Yes' : 'No'
          })`}
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={people
            .filter(person => thisYear - person.year >= 19)
            .map(person => ({ ...person, age: thisYear - person.year }))}
        />

        <StyledTable
          title={`03. Is everyone 19? (Answer: ${isEvery19 ? 'Yes' : 'No'})`}
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={people.map(person => ({ ...person, age: thisYear - person.year }))}
        />

        <hr className={styles.hr} />

        <StyledTable
          title='03. Every comments'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={comments}
        />

        <StyledTable
          title='04. The comment with the ID of 823423'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...comments].filter(comment => comment.id === 823423)}
        />

        <StyledTable
          title='05. Delete the comment with the ID of 823423'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={newArr}
        />
      </div>
    </section>
  );
};

export default ArrayCardioPage02;
