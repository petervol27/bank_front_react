import { useContext, useState } from 'react';
import { login } from '../../scripts/api';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const [error, setError] = useState('');
  const attemptLogin = (e) => {
    e.preventDefault();
    login(username, password).then((response) => {
      if (response.message) {
        setError('Invalid Credentials');
      } else {
        alert('You are being redirected to your account');
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        setIsAuthenticated(true);
        navigate('/account');
      }
    });
  };
  return (
    <main className="text-center">
      <h1>Login</h1>
      <form
        className="p-3 m-3 w-25 mx-auto bg-light global-form"
        onSubmit={(e) => attemptLogin(e)}
      >
        <div>
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            name="username"
            className="form-control"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            name="password"
            className="form-control"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn bg-purple mt-3 form-btn">
          Login
        </button>
        <p className="text-danger">{error}</p>
      </form>
    </main>
  );
}

export default Login;
