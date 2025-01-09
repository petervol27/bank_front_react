import { useEffect, useState } from 'react';
import { fetchAccounts, makeTransaction } from '../../scripts/api';

function TransactionForm({ type, onFormSubmit }) {
  const [accounts, setAccounts] = useState([]);
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

  const forms = {
    transfer: (
      <div>
        <h5 className="text-purple">Transfer To Account</h5>
        <select className="form-select mb-2">
          <option value="">Choose Account</option>
          {accounts.map((account) => (
            <option key={account.id} value={account.id}>
              {account.fname} {account.lname} - {account.account_num}
            </option>
          ))}
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
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { recipientAccount, amount, employerName, description, paymentType } =
      formData;
    let details = '';

    // Example user and account fetched elsewhere (adjust as needed)
    const data = await fetchAccounts(); // Replace with actual user/account context
    const { account, user } = data;

    if (type === 'transfer') {
      const selectedAccount = accounts.find(
        (acc) => acc.id === recipientAccount
      );
      const transactionDetails = `${user.fname} ${user.lname} - ${account.account_num} transferred ${amount} to ${selectedAccount.fname} ${selectedAccount.lname}`;
      await makeTransaction(
        type,
        recipientAccount,
        amount,
        transactionDetails,
        account.id
      );
      details = `Transaction Type: Transfer\nRecipient Account: ${selectedAccount.fname} ${selectedAccount.lname}\nAmount: ${amount}`;
    } else if (type === 'salary') {
      const transactionDetails = `Salary from ${employerName} with a sum of ${amount}`;
      await makeTransaction(type, account.id, amount, transactionDetails);
      details = `Transaction Type: Salary\nEmployer Name: ${employerName}\nAmount: ${amount}`;
    } else if (type === 'credit_usage') {
      const transactionDetails = `Used card for ${description}, amount: ${amount}`;
      const response = await makeTransaction(
        type,
        null,
        amount,
        transactionDetails,
        account.id
      );
      if (response) {
        alert(response);
        window.location.reload();
      }
      details = `Transaction Type: Card Usage\nDescription: ${description}\nAmount: ${amount}`;
    } else if (type === 'payment') {
      let transactionDetails =
        paymentType === 'loan'
          ? `Payed ${amount} for Loan`
          : `Payed off ${amount} from Credit Card`;
      await makeTransaction(
        paymentType,
        null,
        amount,
        transactionDetails,
        account.id
      );
      details = `Transaction Type: Payment\nType: ${paymentType}\nAmount: ${amount}`;
    }

    alert(details); // Replace with modal handling
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
            />
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Salary Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
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
            />
            <input
              name="amount"
              type="number"
              step="0.01"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control mb-2"
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
