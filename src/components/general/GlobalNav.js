import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { setNavigate } from '../../scripts/token';

function GlobalNav() {
  const navigate = useNavigate();
  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to={'/'}>
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
                <NavLink className="nav-link text-purple" to={'/register'}>
                  Register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-purple" to={'/branches'}>
                  Branches
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-purple " to={'/about'}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link text-purple" to={'/contact'}>
                  Contact
                </NavLink>
              </li>
              <li className="nav-item mt-2">
                <NavLink
                  className="nav-link px-5 py-2 bg-purple login-txt d-inline"
                  to={'/login'}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default GlobalNav;
