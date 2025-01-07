import { useEffect, useState } from 'react';
import { fetchAccounts } from '../../scripts/api';

function TransactionForm({ type }) {
  const [accounts, setAccounts] = useState([]);
  const forms = {
    transfer: (
      <div>
        <h5 className="text-purple">Transfer To Account</h5>
        <select className="form-select mb-2">
          <option value="">Choose Account</option>
          {accounts.map((account) => {
            return (
              <option value={account.id} key={account.id}>
                {account.fname} {account.lname} - {account.account_num}
              </option>
            );
          })}
        </select>
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          className="form-control mb-2"
        />
        <button type="submit" className="btn form-btn bg-purple">
          Submit Transfer
        </button>
      </div>
    ),
    salary: (
      <div>
        <h5 className="text-purple">Salary Form</h5>
        <input
          type="text"
          placeholder="Employer Name"
          className="form-control mb-2"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Salary Amount"
          className="form-control mb-2"
        />
        <button type="submit" className="btn form-btn bg-purple">
          Submit Salary
        </button>
      </div>
    ),
    payment: (
      <div>
        <h5 className="text-purple">Payment Form</h5>
        <select className="form-select mb-2">
          <option value="loan">Loan</option>
          <option value="credit">Credit</option>
        </select>
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          className="form-control mb-2"
        />
        <button type="submit" className="btn form-btn bg-purple">
          Submit Payment
        </button>
      </div>
    ),
    credit_usage: (
      <div>
        <h5 className="text-purple">Pay using Card</h5>
        <input
          type="text"
          placeholder="Business"
          className="form-control mb-2"
        />
        <input
          type="number"
          step="0.01"
          placeholder="Amount"
          className="form-control mb-2"
        />
        <button type="submit" className="btn form-btn bg-purple">
          Submit Payment
        </button>
      </div>
    ),
  };
  useEffect(() => {
    fetchAccounts().then((response) => {
      setAccounts(response);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  return (
    <form className="p-3 border rounded" onSubmit={handleSubmit}>
      {forms[type]}
    </form>
  );
}

export default TransactionForm;
