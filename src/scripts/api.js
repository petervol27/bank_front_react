// General + imports
import axiosInstance from './token';

const HOST = 'https://bank-zdpd.onrender.com/';
export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

// const tokenHeader = {
//   headers: { Authorization: `Bearer ${access}` },
// };

// -------------------------------------------------------------
// Branches
export const getBranches = async () => {
  const res = await axiosInstance.get(`${HOST}accounts/branches/`);
  return res.data;
};

// -------------------------------------------------------------
// Authentication
export const login = async (username, password) => {
  const newUser = { username: username, password: password };
  try {
    const res = await axiosInstance.post(`${HOST}users/login/`, newUser);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const register = async (newUser) => {
  try {
    await axiosInstance.post(`${HOST}users/register/`, newUser);
    const loginResponse = await axiosInstance.post(`${HOST}users/login/`, {
      username: newUser.username,
      password: newUser.password,
    });
    const access = loginResponse.data.access;
    const refresh = loginResponse.data.refresh;
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
    await axiosInstance.post(`${HOST}accounts/auto_create/`, {});
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
  const response = await axiosInstance.get(`${HOST}accounts/`);
  return response.data;
};
export const fetchAccounts = async () => {
  const accountResponse = await axiosInstance.get(`${HOST}accounts/all/`);
  const userResponse = await axiosInstance.get(`${HOST}users/all/`);
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
  const response = await axiosInstance.get(`${HOST}loans/`);
  const loan = response.data;
  if (loan === '') {
    return { failure: 'No Loans' };
  } else {
    return { success: 'Got Loan', loan: loan };
  }
};
export const loanRequest = async (newLoan) => {
  const response = await axiosInstance.post(
    `${HOST}loans/request_loan/`,
    newLoan
  );
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
  const response = await axiosInstance.get(`${HOST}cards/get_card/`);
  const card = response.data;
  if (card === '') {
    return { failure: 'You have no Card' };
  }
  return card;
};
export const fetchCardHistory = async () => {
  const response = await axiosInstance.get(`${HOST}cards/card_history/`);
  return response.data;
};
export const cardUse = async (amount, transactionDetails) => {
  const newTransaction = {
    amount: amount,
    details: transactionDetails,
  };

  const response = await axiosInstance.post(
    `${HOST}cards/use_card/`,
    newTransaction
  );
  return response.data;
};
export const fetchCardForm = async () => {
  const response = await axiosInstance.get(`${HOST}cards/get_form_data/`);
  return response.data;
};

export const cardRequest = async (newCard) => {
  const response = await axiosInstance.post(`${HOST}cards/`, newCard);
  return response.data;
};
// -------------------------------------------------------------
// Transactions
export const fetchHistory = async () => {
  const response = await axiosInstance.get(`${HOST}transactions/history/`);
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

  const response = await axiosInstance.post(
    `${HOST}transactions/`,
    newTransaction
  );
  if (response.data.failure) {
    return response.data;
  }
  return { success: 'Transaction Successful!' };
};

// -------------------------------------------------------------
