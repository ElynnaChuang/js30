import styles from './styles.module.scss';

export const ListItem = ({ id, status, textArr01, textArr02, subText }) => (
  <li className={styles.list_item}>
    {status === 'noresult' ? (
      <div className={styles.name}>No Result</div>
    ) : (
      <>
        <div className={styles.name}>
          {[
            textArr01[0],
            <span className={styles.hl} key={id + textArr01[1]}>
              {textArr01[1]}
            </span>,
            textArr01[2],
          ]}
          ,
          {[
            textArr02[0],
            <span className={styles.hl} key={id + textArr02[1]}>
              {textArr02[1]}
            </span>,
            textArr02[2],
          ]}
        </div>
        <div className={styles.population}>{subText}</div>
      </>
    )}
  </li>
);
