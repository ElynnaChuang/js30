import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      {Array.from({ length: 30 }, (_, i) => {
        const pageName = String(i + 1).padStart(2, 0);
        return (
          <Link to={`/${pageName}`} key={i}>
            <div>{pageName}</div>
          </Link>
        );
      })}
    </div>
  );
};
