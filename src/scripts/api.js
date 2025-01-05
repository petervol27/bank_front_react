import axios from 'axios';
const HOST = 'https://bank-zdpd.onrender.com/';
// const tokenHeader = {
//   headers: { Authorization: `Bearer ${access}` },
// };
// -------------------------------------------------------------
// Branches
export const getBranches = async () => {
  const res = await axios.get(`${HOST}accounts/branches/`);
  return res.data;
};

// -------------------------------------------------------------
// Authentication
export const login = async (username, password) => {
  const newUser = { username: username, password: password };
  try {
    const res = await axios.post(`${HOST}users/login/`, newUser);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const register = async (newUser) => {
  try {
    await axios.post(`${HOST}users/register/`, newUser);
    const loginResponse = await axios.post(`${HOST}users/login/`, {
      username: newUser.username,
      password: newUser.password,
    });
    const access = loginResponse.data.access;
    const refresh = loginResponse.data.refresh;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    await axios.post(
      `${HOST}accounts/auto_create/`,
      {},
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    return {
      status: 'success',
      message: 'You are now being redirected to your account',
    };
  } catch (error) {
    return {
      status: 'failure',
      message: 'Something went wrong please check credentials',
    };
  }
};
// -------------------------------------------------------------
// Account
// -------------------------------------------------------------
// Loan
// -------------------------------------------------------------
// Credit
// -------------------------------------------------------------
// Transfers
// -------------------------------------------------------------
