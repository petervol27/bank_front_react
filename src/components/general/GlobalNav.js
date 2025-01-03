import { Link } from 'react-router-dom';

function GlobalNav() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to={'/'}>
            <h3 className="text-purple">Neo Banking</h3>
          </Link>
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
                <Link className="nav-link text-purple" to={'/register'}>
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple" to={'/branches'}>
                  Branches
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-purple " to={'/about'}>
                  About Us
                </Link>
              </li>
              <li className="nav-item me-3">
                <Link className="nav-link text-purple" to={'/contact'}>
                  Contact
                </Link>
              </li>
              <li className="nav-item mt-2">
                <Link
                  className="nav-link px-5 py-2 bg-purple login-txt d-inline"
                  to={'/login'}
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default GlobalNav;
