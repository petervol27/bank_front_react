import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../AuthContext';

function Header({ buttonText, linkPath }) {
  const { username } = useContext(AuthContext);
  return (
    <div className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info">
      <h1>
        Welcome, <strong>{username}!</strong>
      </h1>
      {buttonText === '' ? (
        ''
      ) : (
        <Link className="btn bg-purple login-txt text-white me-3" to={linkPath}>
          {buttonText}
        </Link>
      )}
    </div>
  );
}

export default Header;
