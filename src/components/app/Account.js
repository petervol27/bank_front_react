import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../AccountContext';
import { capitalize, fetchHistory, makeTransaction } from '../../scripts/api';
import Header from './Header';

function Account() {
  const navigate = useNavigate();
  const { accountNum, setAccountNum } = useContext(AccountContext);
  const { accountBranch, setAccountBranch } = useContext(AccountContext);
  const { accountBalance, setAccountBalance } = useContext(AccountContext);
  const [transactions, setTransactions] = useState([]);
  const [accountId, setAccountId] = useState('');
  const [amount, setAmount] = useState('');
  useEffect(() => {
    fetchHistory().then((response) => {
      setTransactions(response.transactions);
      setAccountId(response.account.id);
    });
  }, []);
  const handleDepositWithdraw = async (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if (action === 'withdraw') {
      const details = `Withdrew ${amount} from account`;
      await makeTransaction(action, null, amount, details, accountId);
      alert(details);
      setAmount('');
      fetchHistory().then((response) => {
        setTransactions(response.transactions);
        setAccountId(response.account.id);
      });
      navigate('/account');
    } else {
      const details = `Deposited ${amount} to account`;
      await makeTransaction(action, accountId, amount, details, null);
      alert(details);
      setAmount('');
      fetchHistory().then((response) => {
        setTransactions(response.transactions);
        setAccountId(response.account.id);
      });
      navigate('/account');
    }
  };
  return (
    <main className="main-accounts">
      <Header buttonText={'Make A Transaction'} linkPath={'/transactions'} />
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
            ₪{accountBalance}
          </strong>
        </p>
      </div>
      <form
        className="container d-flex justify-content-center align-items-center gap-2 mb-3"
        onSubmit={(e) => handleDepositWithdraw(e)}
      >
        <input
          type="number"
          className="form-control w-25"
          placeholder="Enter Amount Here"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
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
              {transactions.map((transaction, index) => {
                return (
                  <React.Fragment key={index}>
                    <tr
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseRow${transaction.id}`}
                      aria-expanded="false"
                      aria-controls={`collapseRow${transaction.id}`}
                    >
                      <td className="fw-bold">{transaction.formatted_date}</td>
                      <td>{capitalize(transaction.transaction_type)}</td>
                      {transaction.reciever_account === accountId ? (
                        <>
                          <td className="text-danger"></td>
                          <td className="text-success">
                            ₪{transaction.amount}
                          </td>
                          <td className="fw-bold">
                            ₪{transaction.reciever_new_balance}
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="text-danger">₪{transaction.amount}</td>
                          <td className="text-success"></td>
                          <td className="fw-bold">
                            ₪{transaction.sender_new_balance}
                          </td>
                        </>
                      )}
                    </tr>
                    <tr
                      id={`collapseRow${transaction.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#tableAccordion"
                    >
                      <td colSpan="5">
                        <div className="p-3">
                          <strong>Details:</strong> {transaction.details}
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Account;
