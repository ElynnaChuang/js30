import { Link } from 'react-router-dom';
import { StyledTable } from '@/Components';
import { inventors, people, transportation } from './data';
import styles from './styles.module.scss';

export const ArrayCardioPage01 = () => {
  // 05計數
  const total = [...inventors].reduce(
    (accumulator, currentInventor) =>
      accumulator + Number(currentInventor.passed - currentInventor.year),
    0,
  );

  // 07 計數
  const transObj = [...transportation].reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 0;
    }
    obj[item] += 1;
    return obj;
  }, {});

  // 轉為array
  const transArr = Object.entries(transObj).map((item, i) => {
    const [way, times] = item;
    return { id: i + 1, way, times };
  });

  const prinaryColor = '#2796b5';

  return (
    <section className={styles.page}>
      <div className={styles.title} style={{ color: prinaryColor }}>
        ArrayCardio v1
        <Link to='/07' className={styles.link}>
          Go to ArrayCardio v2 page
        </Link>
      </div>
      <div className={styles.container}>
        <StyledTable
          title='01. All inventors'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...inventors].sort((a, b) => a.id - b.id)}
        />

        <StyledTable
          title='02. Inventors first and last names'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...inventors].map(inventor => ({
            id: inventor.id,
            first: inventor.first,
            last: inventor.last,
          }))}
        />

        <StyledTable
          title={`03. The list of inventors for those who were born in the 1500's`}
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...inventors].filter(
            inventor => inventor.year >= 1500 && inventor.year < 1600,
          )}
        />

        <StyledTable
          title='04. Sort the inventors by birthdate, oldest to youngest'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...inventors].sort((a, b) => a.year - b.year)}
        />

        <StyledTable
          title={`05. Sort the inventors by years lived (total: ${total} years)`}
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...inventors]
            .map(inventor => ({
              ...inventor,
              lived: inventor.passed - inventor.year,
            }))
            .sort((a, b) => b.lived - a.lived)}
        />

        <StyledTable
          title='06. Sort the people alphabetically by last name'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={[...people]
            .map((person, i) => {
              const name = person.split(',');
              return {
                id: i + 1,
                lastName: name[0],
                firstName: name[1],
              };
            })
            .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))}
        />

        <StyledTable
          title='07. Sum up the instances of each of transportation'
          titleColor={prinaryColor}
          headerColor={prinaryColor}
          data={transArr.sort((a, b) => b.times - a.times)}
        />
      </div>
    </section>
  );
};
