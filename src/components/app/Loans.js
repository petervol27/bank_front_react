import { useEffect, useState } from 'react';
import Header from './Header';
import { fetchLoans } from '../../scripts/api';
import { useNavigate } from 'react-router-dom';

function Loans() {
  const navigate = useNavigate();
  const [gotLoan, setGotLoan] = useState(false);
  const [loan, setLoan] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchLoans().then((response) => {
      setIsLoading(false);
      if (response.failure) {
        setGotLoan(false);
      } else {
        setGotLoan(true);
        setLoan(response.loan);
      }
    });
  }, []);
  if (isLoading) {
    return (
      <div className="text-center">
        <span className="loader"></span>
      </div>
    );
  }
  return (
    <main>
      <Header buttonText={'Take A Loan'} linkPath={'/takeLoan'} />
      <div className="container bg-light py-2 mt-2 mb-3 border rounded">
        {!gotLoan ? (
          <h1 className="text-purple text-center">No Loans</h1>
        ) : (
          <ul className="list-group m-3">
            <h3 className="text-center text-purple">
              Loan: <strong>{loan.loan_number}</strong>
            </h3>
            <li className="list-group-item">Date Taken: {loan.date_taken}</li>
            <li className="list-group-item">Amount Taken: {loan.amount}</li>
            <li className="list-group-item">
              Spread To: {loan.payments} Payments
            </li>
            <li className="list-group-item">Due By: {loan.date_finished}</li>
            <li className="list-group-item">Left to Pay: {loan.left_to_pay}</li>
            <button
              className="btn bg-purple form-btn w-25 mx-auto mt-3"
              onClick={() => navigate('/transactions')}
            >
              Pay Off
            </button>
          </ul>
        )}
      </div>
    </main>
  );
}

export default Loans;
