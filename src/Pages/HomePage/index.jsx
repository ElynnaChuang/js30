import { Link } from 'react-router-dom';

export const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <Link to='/01'>
      <span>01</span>
    </Link>
    <Link to='/02'>
      <span>02</span>
    </Link>
    <Link to='/03'>
      <span>03</span>
    </Link>
  </div>
);
