import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountContext from '../../AccountContext';
import AuthContext from '../../AuthContext';
import { capitalize, fetchHistory } from '../../scripts/api';

function Account() {
  const { accountNum, setAccountNum } = useContext(AccountContext);
  const { accountBranch, setAccountBranch } = useContext(AccountContext);
  const { accountBalance, setAccountBalance } = useContext(AccountContext);
  const { username, setUsername } = useContext(AuthContext);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetchHistory().then((response) => {
      console.log(response);
    });
  });
  return (
    <main className="main-accounts">
      <div className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info">
        <h1>
          Welcome, <strong>{username}!</strong>
        </h1>
        <Link
          className="btn bg-purple login-txt text-white me-3"
          to={'/transactions'}
        >
          Make a Transaction
        </Link>
      </div>
      <div className="my-3 bg-light text-center p-3">
        <h3>
          Account:<strong className="text-purple"> {accountNum}</strong>
        </h3>
        <p>
          <strong>Branch</strong>:{' '}
          <strong className="text-purple">{accountBranch}</strong>
        </p>
        <p id="accountBalance" className="fs-4">
          <strong>Current Balance: </strong>
          <strong
            className={accountBalance >= 0 ? 'text-success' : 'text-danger'}
          >
            {accountBalance}
          </strong>
        </p>
      </div>
      <form
        className="container d-flex justify-content-center align-items-center gap-2 mb-3"
        id="withdrawDepositForm"
      >
        <input
          type="number"
          className="form-control w-25"
          placeholder="Enter Amount Here"
          id="amountInput"
          required
        />

        <button
          className="btn btn-danger"
          type="submit"
          name="action"
          value="withdraw"
        >
          Withdraw
        </button>
        <button
          className="btn btn-primary"
          type="submit"
          name="action"
          value="deposit"
        >
          Deposit
        </button>
      </form>
      <div className="accordion" id="tableAccordion">
        <div className="table-responsive-lg">
          <table className="table table-hover">
            <thead className="table-active">
              <tr>
                <th>Date</th>
                <th>Action</th>
                <th>Expanse</th>
                <th>Income</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {/* {transactions.map((transaction) => {
                return (
                  <div>
                    <tr
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseRow${transaction.id}"
                      aria-expanded="false"
                      aria-controls="collapseRow${transaction.id}"
                    >
                      <td class="fw-bold">${transaction.formatted_date}</td>
                      <td>${capitalize(transaction.transaction_type)}</td>$
                      {transaction.reciever_account == account.id
                        ? `<td class="text-danger"></td><td class="text-success">${transaction.amount}</td><td class="fw-bold">${transaction.reciever_new_balance}</td>`
                        : `<td class="text-danger">${transaction.amount}</td><td class="text-success"></td><td class="fw-bold">${transaction.sender_new_balance}</td>`}
                    </tr>
                    <tr
                      id="collapseRow${transaction.id}"
                      class="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#tableAccordion"
                    >
                      <td colspan="5">
                        <div class="p-3">
                          <strong>Details:</strong> ${transaction.details}
                        </div>
                      </td>
                    </tr>
                  </div>
                );
              })} */}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Account;
