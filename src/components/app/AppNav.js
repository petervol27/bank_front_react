import { useContext, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import AuthContext from '../../AuthContext';
import AccountContext from '../../AccountContext';
import { capitalize, fetchAccount } from '../../scripts/api';

function AppNav() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const { setAccountNum } = useContext(AccountContext);
  const { setAccountBranch } = useContext(AccountContext);
  const { setAccountBalance } = useContext(AccountContext);
  const { setUsername } = useContext(AuthContext);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    alert('Thank you for using our services');
    setIsAuthenticated(false);
    setUsername('');
    setAccountNum('');
    setAccountBranch('');
    setAccountBalance('');
    navigate('/');
  };
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/account');
    }
    fetchAccount().then((response) => {
      const userName =
        capitalize(response.user.fname) + ' ' + capitalize(response.user.lname);
      setUsername(userName);
      setAccountNum(response.account.account_num);
      setAccountBranch(response.account.branch);
      setAccountBalance(response.account.balance);
    });
  }, []);

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
                <NavLink className="nav-link text-purple" to={'/account'}>
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
              <li className="nav-item ms-2">
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
