import { Link } from 'react-router-dom';
import { LayoutCol1 } from '@/Layouts';
import { StyledTable, Title } from '@/Components';
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
    <LayoutCol1 baseClassName={styles.page}>
      <Title
        title='ArrayCardio v2'
        subtitle={<Link to='/04'>Go to ArrayCardio v1 page</Link>}
        titleColor={prinaryColor}
      />

      <div className={styles.tables}>
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
    </LayoutCol1>
  );
};

export default ArrayCardioPage02;
