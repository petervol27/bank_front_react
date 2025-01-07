// General + imports
import axios from 'axios';
const HOST = 'https://bank-zdpd.onrender.com/';
export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);
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
// Accounts
export const fetchAccountDetails = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}accounts/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};
export const fetchAccount = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}accounts/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};
export const fetchAccounts = async () => {
  const access = localStorage.getItem('access_token');
  const accountResponse = await axios.get(`${HOST}accounts/all/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  const userResponse = await axios.get(`${HOST}users/all/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  const accounts = accountResponse.data;
  const users = userResponse.data;
  let filteredAccounts = [];
  const userMap = users.reduce((map, user) => {
    map[user.id] = user;
    return map;
  }, {});
  accounts.forEach((account) => {
    const user = userMap[account.user];
    if (user) {
      filteredAccounts.push({
        id: account.id,
        fname: capitalize(user.first_name),
        lname: capitalize(user.last_name),
        account_num: account.account_num,
      });
    }
  });
  return filteredAccounts;
};
// -------------------------------------------------------------
// Loan
// -------------------------------------------------------------
// Credit
// -------------------------------------------------------------
// Transactions

// export const fetchTransactionTypes = async () => {
//   const response = await axios.get(`${HOST}transactions/types/`);
//   const types = response.data;
//   return types;
// };

// -------------------------------------------------------------
