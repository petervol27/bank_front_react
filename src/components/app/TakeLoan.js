import { useContext, useState } from 'react';
import Header from './Header';
import { loanRequest } from '../../scripts/api';
import { useNavigate } from 'react-router-dom';
import AccountContext from '../../AccountContext';

function TakeLoan() {
  const navigate = useNavigate();
  const [payments, setPayments] = useState(6);
  const [amount, setAmount] = useState('');
  const { accountBalance, setAccountBalance } = useContext(AccountContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLoan = { amount: amount, payments: payments };
    loanRequest(newLoan).then((response) => {
      setAccountBalance((Number(accountBalance) + Number(response)).toFixed(2));
      navigate('/loans');
    });
  };
  return (
    <main>
      <Header buttonText={''} linkPath={''} />
      <div className="container text-center bg-light p-3">
        <p className="fw-bold fs-4 text-purple">
          Hello welcome to our loan request page, you may pick any amount for a
          loan, payments will be divided between 6 months and 36 months, please
          remember being late on your payment will be taxed heavily so please
          make sure you pay on time thank you!
        </p>
      </div>
      <form
        className="container p-3 w-50 mx-auto bg-light my-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h3 className="text-center text-purple fw-bold">Loan Request</h3>
        <label className="form-label">Amount</label>
        <input
          className="form-control"
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <label className="form-label mt-3">
          Payments: <span>{payments}</span>
        </label>
        <input
          required
          className="form-control"
          type="range"
          min="6"
          max="36"
          name="payments"
          value={payments}
          onChange={(e) => setPayments(e.target.value)}
        />
        <div className="text-center mt-3">
          <button className="btn form-btn bg-purple text-center" type="submit">
            Request Loan
          </button>
        </div>
      </form>
    </main>
  );
}

export default TakeLoan;
