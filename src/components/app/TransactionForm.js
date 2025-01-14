import { useContext, useEffect, useState } from 'react';
import {
  fetchAccount,
  fetchAccounts,
  makeTransaction,
  cardUse,
} from '../../scripts/api';
import AccountContext from '../../AccountContext';

function TransactionForm({ type, onFormSubmit }) {
  const [accounts, setAccounts] = useState([]);
  const { accountBalance, setAccountBalance } = useContext(AccountContext);
  const [formData, setFormData] = useState({
    recipientAccount: '',
    amount: '',
    employerName: '',
    description: '',
    paymentType: type,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    fetchAccounts().then(setAccounts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { recipientAccount, amount, employerName, description, paymentType } =
      formData;
    let details = '';
    const data = await fetchAccount();
    const { account, user } = data;
    if (type === 'transfer') {
      const selectedAccount = accounts.find(
        (acc) => acc.id === Number(recipientAccount)
      );
      const transactionDetails = `${user.fname} ${user.lname} - ${account.account_num} transferred ₪${amount} to ${selectedAccount.fname} ${selectedAccount.lname}`;
      await makeTransaction(
        type,
        recipientAccount,
        amount,
        transactionDetails,
        account.id
      );
      details = `Transaction Type: Transfer Recipient Account: ${selectedAccount.fname} ${selectedAccount.lname} Amount: ₪${amount}`;
      setAccountBalance((Number(accountBalance) - Number(amount)).toFixed(2));
    } else if (type === 'salary') {
      const transactionDetails = `Salary from ${employerName} with a sum of ₪${amount}`;
      await makeTransaction(type, account.id, amount, transactionDetails);
      details = `Transaction Type: Salary Employer Name: ${employerName} Amount: ₪${amount}`;
      setAccountBalance((Number(accountBalance) + Number(amount)).toFixed(2));
    } else if (type === 'credit_usage') {
      const transactionDetails = `Used card for ${description}, amount: ₪${amount}`;
      const response = await cardUse(amount, transactionDetails);
      if (response.failure) {
        alert(response.failure);
        return;
      } else {
        details = `Transaction Type: Card Usage, Description: ${description}, Amount: ₪${amount}`;
      }
    } else if (type === 'payment') {
      let transactionDetails =
        paymentType === 'loan'
          ? `Payed ₪${amount} for Loan`
          : `Payed off ₪${amount} from Credit Card`;
      if (paymentType === 'payment') {
        alert('Please Choose Payment Type');
        return;
      }
      const response = await makeTransaction(
        paymentType,
        null,
        amount,
        transactionDetails,
        account.id
      );
      if (response.failure) {
        alert(response.failure);
        return;
      }
      details = `Transaction Type: Payment ,Payment Type: ${paymentType} , Amount: ₪${amount}`;
      setAccountBalance((Number(accountBalance) - Number(amount)).toFixed(2));
    }
    onFormSubmit(details);
  };

  const renderFormFields = () => {
    switch (type) {
      case 'transfer':
        return (
          <>
            <select
              name="recipientAccount"
              value={formData.recipientAccount}
              onChange={handleChange}
              className="form-select mb-2"
            >
              <option value="">Choose Account</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {account.fname} {account.lname} - {account.account_num}
                </option>
              ))}
            </select>
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
          </>
        );
      case 'salary':
        return (
          <>
            <input
              name="employerName"
              type="text"
              placeholder="Employer Name"
              value={formData.employerName}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Salary Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
          </>
        );
      case 'credit_usage':
        return (
          <>
            <input
              name="description"
              type="text"
              placeholder="Business"
              value={formData.description}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
          </>
        );
      case 'payment':
        return (
          <>
            <select
              name="paymentType"
              value={formData.paymentType}
              onChange={handleChange}
              className="form-select mb-2"
            >
              <option value="">Select Payment Type</option>
              <option value="loan">Loan</option>
              <option value="credit">Credit</option>
            </select>
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
              required
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <form className="p-3 border rounded" onSubmit={handleSubmit}>
      {renderFormFields()}
      <button type="submit" className="btn form-btn bg-purple">
        Submit
      </button>
    </form>
  );
}

export default TransactionForm;
