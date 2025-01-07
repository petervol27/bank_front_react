import { useContext, useEffect, useState } from 'react';
import AccountContext from '../../AccountContext';
import { fetchAccounts } from '../../scripts/api';
import TransactionForm from './TransactionForm';
function Transactions() {
  const { accountNum } = useContext(AccountContext);
  const { accountBalance } = useContext(AccountContext);
  const [transactionType, setTransactionType] = useState('');
  const handleTransactionType = (e) => {
    setTransactionType(e.target.value);
  };
  return (
    <main>
      <div className="text-center my-2">
        <div
          className="px-3 d-flex justify-content-between align-items-center bg-light gap-3"
          id="accountInfo"
        >
          <h3 className="text-purple">
            Hello, <strong>{localStorage.getItem('user_name')}</strong>
          </h3>
          <h4>
            Account: <span className="text-purple">{accountNum}</span>
          </h4>
          <h3>
            Balance:
            <span
              className={accountBalance >= 0 ? 'text-success' : 'text-danger'}
            >
              {' '}
              {accountBalance}
            </span>
          </h3>
        </div>
        <div className="bg-light my-2">
          <form>
            <label htmlFor="transactionType " className="fw-bold">
              Choose Type Of Transaction
            </label>
            <select
              id="transactionType"
              className="form-select w-25 mx-auto"
              onChange={handleTransactionType}
            >
              <option value="">Select Transaction Type</option>
              <option value="transfer">Transfer</option>
              <option value="salary">Salary</option>
              <option value="payment">Payment</option>
              <option value="credit_usage">Pay With Card</option>
            </select>
          </form>
        </div>
        {/* <form id="transactionForm" className="d-none">
          <div id="formContent" className="p-3 border rounded"></div>
        </form> */}
        {transactionType === '' ? (
          ''
        ) : (
          <TransactionForm type={transactionType} />
        )}
      </div>
      {/* <div
        className="modal fade"
        id="transactionModal"
        tabIndex="-1"
        aria-labelledby="transactionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transactionModalLabel">
                Transaction Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="modalContent"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="check"></div> */}
    </main>
  );
}

export default Transactions;
