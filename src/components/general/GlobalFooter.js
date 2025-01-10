import { useContext } from 'react';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function GlobalFooter() {
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <footer className="bg-light p-3 text-center">
      <h1 className="text-purple">Neo Banking</h1>
      {!isAuthenticated ? (
        <ul className="list-group list-group-horizontal justify-content-center">
          <li className="list-group-item">
            <button
              className="text-decoration-none text-purple btn"
              onClick={() => navigate('/about')}
            >
              About Us
            </button>
          </li>
          <li className="list-group-item">
            <button
              className="text-decoration-none text-purple btn"
              onClick={() => navigate('/contact')}
            >
              Contact
            </button>
          </li>
        </ul>
      ) : (
        ''
      )}
      <ul className="list-group w-25 mx-auto mt-3 contact-details">
        <li className="list-group-item">
          Email: <strong>NeoBanking@neo.com</strong>
        </li>
        <li className="list-group-item">
          Phone: <strong>+972551472398</strong>
        </li>
        <li className="list-group-item">
          Address:
          <strong>
            {' '}
            HaGanavim 15, Kiryat Ganav 752-198 , Gush Dan, Israel
          </strong>
        </li>
      </ul>
    </footer>
  );
}

export default GlobalFooter;
