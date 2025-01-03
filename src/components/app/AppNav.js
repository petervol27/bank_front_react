import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthContext';

function AppNav() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    alert('Thank you for using our services');
    setIsAuthenticated(false);
    navigate('/');
  };
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/account'}>
            <h3 className="text-purple">Neo Banking</h3>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-purple active"
                  to={'/account'}
                >
                  Overview
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-purple" to={'/loans'}>
                  My Loans
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-purple" to={'/cards'}>
                  My Cards
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <button
                  className="nav-link bg-purple login-txt d-inline px-5 py-2 logout-btn"
                  onClick={() => logout()}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppNav;
