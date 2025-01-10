import { useEffect, useState } from 'react';
import Header from './Header';
import { cardRequest, fetchCardForm } from '../../scripts/api';
import { useNavigate } from 'react-router-dom';

function GetCard() {
  const navigate = useNavigate();
  const [creditLimit, setCreditLimit] = useState(1000);
  const [manufactorers, setManufactorers] = useState([]);
  const [payDays, setPayDays] = useState([]);
  const [chosenPayDay, setChosenPayDay] = useState('');
  const [chosenManufactorer, setChosenManufactorer] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      manufacturer: chosenManufactorer,
      credit_limit: creditLimit,
      payment_date: chosenPayDay,
    };
    cardRequest(newCard).then((response) => {
      if (response.failure) {
        alert(response.failure);
        navigate('/cards');
        return;
      }
      alert('Congratulations on your new card!');
      navigate('/cards');
    });
  };

  useEffect(() => {
    fetchCardForm().then((response) => {
      setManufactorers(response.manufactorers);
      setPayDays(response.payment_days);
    });
  }, []);
  return (
    <main>
      <Header buttonText={''} linkPath={''} />
      <div className="container text-center bg-light p-3">
        <p className="fw-bold fs-4 text-purple">
          Hello welcome to our credit cards request page, you may pick any
          manufactor for a card, payments will be taken during the 1st of each
          month or 10th of each month, please remember being late on your
          payment will be taxed heavily so please make sure you pay on time
          thank you!
        </p>
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="container p-3 w-50 mx-auto bg-light my-3"
      >
        <h3 className="text-center text-purple fw-bold">Card Request</h3>
        <label className="form-label">Manufactorer:</label>
        <select
          className="form-select"
          id="manufactorOptions"
          name="manufactorOptions"
          onChange={(e) => setChosenManufactorer(e.target.value)}
        >
          <option value="">Choose Manufactorer</option>
          {manufactorers.map((manufactorer, index) => {
            return (
              <option key={index} value={manufactorer[0]}>
                {manufactorer[0]}
              </option>
            );
          })}
        </select>
        <label className="form-label">Payment Day:</label>
        <select
          className="form-select"
          id="payOptions"
          name="payOptions"
          onChange={(e) => setChosenPayDay(e.target.value)}
        >
          <option value="">Choose Payment Date</option>
          {payDays.map((payDay, index) => {
            return (
              <option key={index} value={payDay[0]}>
                {payDay[1]}
              </option>
            );
          })}
        </select>
        <label className="form-label mt-3">
          Credit Limit: <span>{creditLimit}</span>
        </label>
        <input
          required
          className="form-control"
          type="range"
          min="1000"
          max="10000"
          name="limit"
          id="limit"
          step="1000"
          value={creditLimit}
          onChange={(e) => setCreditLimit(e.target.value)}
        />
        <div className="text-center mt-3">
          <button className="btn form-btn bg-purple text-center" type="submit">
            Request Card
          </button>
        </div>
      </form>
    </main>
  );
}

export default GetCard;
