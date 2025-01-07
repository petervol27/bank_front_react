import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountContext from '../../AccountContext';

function Account() {
  const { accountNum, setAccountNum } = useContext(AccountContext);
  const { accountBranch, setAccountBranch } = useContext(AccountContext);
  const { accountBalance, setAccountBalance } = useContext(AccountContext);

  return (
    <main className="main-accounts">
      <div className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info">
        <h1>
          Welcome, <strong>{localStorage.getItem('user_name')}!</strong>
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
            <tbody id="tableBody"></tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Account;
