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
  console.log('registering');
  console.log(newUser);
  return 'nigga';
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
