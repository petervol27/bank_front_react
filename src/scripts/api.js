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
export const fetchLoans = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}loans/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  const loan = response.data;
  if (loan === '') {
    return { failure: 'No Loans' };
  } else {
    return { success: 'Got Loan', loan: loan };
  }
};
export const loanRequest = async (newLoan) => {
  const access = localStorage.getItem('access_token');
  const response = await axios.post(`${HOST}loans/request_loan/`, newLoan, {
    headers: { Authorization: `Bearer ${access}` },
  });
  if (response.data.failure) {
    alert('sorry you already have an active loan');
    return;
  }
  const loanAmount = response.data.amount;
  alert(`${loanAmount} is being transfered to your account now!`);
};
// -------------------------------------------------------------
// Credit
export const fetchCard = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}cards/get_card/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  const card = response.data;
  if (card === '') {
    return { failure: 'You have no Card' };
  }
  return card;
};
export const fetchCardHistory = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}cards/card_history/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};
export const cardUse = async (amount, transactionDetails) => {
  const newTransaction = {
    amount: amount,
    details: transactionDetails,
  };
  const access = localStorage.getItem('access_token');
  const response = await axios.post(`${HOST}cards/use_card/`, newTransaction, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};
export const fetchCardForm = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}cards/get_form_data/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};

export const cardRequest = async (newCard) => {
  const access = localStorage.getItem('access_token');
  const response = await axios.post(`${HOST}cards/`, newCard, {
    headers: { Authorization: `Bearer ${access}` },
  });
  return response.data;
};
// -------------------------------------------------------------
// Transactions
export const fetchHistory = async () => {
  const access = localStorage.getItem('access_token');
  const response = await axios.get(`${HOST}transactions/history/`, {
    headers: { Authorization: `Bearer ${access}` },
  });
  const data = await fetchAccount();
  const account = data.account;
  const transactions = response.data;
  return { transactions: [...transactions], account: account };
};
export const makeTransaction = async (
  type,
  reciever = null,
  amount,
  details,
  sender = null
) => {
  const newTransaction = {
    transaction_type: type,
    reciever_account: reciever,
    amount: amount,
    details: details,
    sender_account: sender,
  };
  const access = localStorage.getItem('access_token');
  const response = await axios.post(`${HOST}transactions/`, newTransaction, {
    headers: { Authorization: `Bearer ${access}` },
  });
  if (response.data.failure) {
    return response.data;
  }
  return { success: 'Transaction Successful!' };
};

// -------------------------------------------------------------
