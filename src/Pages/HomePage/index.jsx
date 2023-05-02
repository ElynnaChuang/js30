import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import styles from './styles.module.scss';
import { data } from './data';
import { Card } from '@/Components';

export const HomePage = () => {
  const title = 'JavaScript30 React version';
  const subTitle = `This web contains all my JavaScript 30 practices built with the React framework, and these 30 challenges on Javascript is designed by Wes Bos`;

  return (
    <div className={styles.homepage}>
      <section className={styles.container}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <h2>{subTitle}</h2>
          <ul>
            <li onClick={() => window.open('https://github.com/ElynnaChuang/js30')}>
              <GitHubIcon />
              My Github Repo
            </li>
            <li onClick={() => window.open('https://javascript30.com/')}>
              <WebIcon />
              JS30 Course Page
            </li>
          </ul>
        </div>
        <div className={styles.cards}>
          {data.map(el => {
            const num = String(el.id).padStart(2, 0);
            return (
              <Card
                key={el.id}
                linkTo={`/${num}`}
                title={`${num}. ${el.title}`}
                images={el.images}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
