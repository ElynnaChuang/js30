import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { Clock, Image } from '@/Components';
import dayjs from '@/Helpers/dayjs';
import styles from './styles.module.scss';
import { countries } from './contries';
import { defaultImg } from '@/Assets/02bg';

export const ClockPage = () => {
  const getUtcOffset = timezone => `${dayjs().tz(timezone).offsetName()}`;

  const localTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const [otherTimeZone, setOtherTimeZone] = useState('Europe/London');

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <Image
          images={countries[localTimeZone]?.images || { base: defaultImg.base }}
          className={styles.bg}
        />
        <div className={styles.clock_container}>
          <div className={styles.clock}>
            <Clock timezone={localTimeZone} />
          </div>
        </div>
        <div className={styles.text_container}>
          <div>{`You're now in`}</div>
          <span>{`${countries[localTimeZone].name} ${getUtcOffset(localTimeZone)}`}</span>
        </div>
      </div>

      <div className={styles.container}>
        <Image images={countries[otherTimeZone].images} className={styles.bg} />
        <div className={styles.clock_container}>
          <div className={styles.clock}>
            <Clock timezone={otherTimeZone} />
          </div>
        </div>

        <div className={styles.select_container} htmlFor='country'>
          <select
            name='country'
            id='country'
            className={styles.select}
            onChange={e => setOtherTimeZone(e.target.value)}
          >
            {Object.entries(countries).map(([key, value]) => (
              <option value={key} key={key}>
                {`${value.name} ${getUtcOffset(key)}`}
              </option>
            ))}
          </select>
          <ExpandMoreIcon className={styles.dropArrow} sx={{ fontSize: 20 }} />
        </div>
      </div>
    </section>
  );
};
