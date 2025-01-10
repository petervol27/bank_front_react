import { useEffect, useState } from 'react';
import Header from './Header';
import { fetchCard, fetchCardHistory } from '../../scripts/api';
import { useNavigate } from 'react-router-dom';

function Cards() {
  const navigate = useNavigate();
  const [gotCard, setGotCard] = useState(false);
  const [card, setCard] = useState({});
  const [cardHistory, setCardHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchCard().then((response) => {
      setIsLoading(false);
      if (response.failure) {
        return;
      }
      setGotCard(true);
      setCard(response);
    });
    fetchCardHistory().then((response) => {
      setCardHistory(response);
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
      <Header buttonText={'Get A Card'} linkPath={'/getCard'} />
      <div className="container">
        <div className="pt-2 mt-2">
          {gotCard ? (
            <div className="card">
              <div className="card-header text-center fw-bold">
                {card.card_number} - {card.expiration_date} - {card.cvv}
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">Owner: {card.owner_name}</h5>
                <p className="card-text">
                  Payment date: {card.payment_date} of each month
                </p>
                <p className="card-text">
                  Manufactorer: <strong>{card.manufacturer}</strong>
                </p>
                <p className="card-text">
                  Credit Limit: <strong>{card.credit_limit}</strong>
                </p>
                <p className="card-text">
                  Credit Used: <strong>{card.current_credit_used}</strong>
                </p>
                <button
                  className="btn bg-purple form-btn"
                  onClick={() => navigate('/transactions')}
                >
                  Use Card
                </button>
              </div>
            </div>
          ) : (
            <h1 className="text-purple text-center">No Cards Available</h1>
          )}
        </div>
        {cardHistory.length === 0 && (
          <h3 className="text-purple text-center">No Card Activity Yet</h3>
        )}
        <table className="table border">
          <thead className="table-active">
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody id="tableBody">
            {cardHistory.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td>{transaction.formatted_date}</td>
                  <td>₪{transaction.amount}</td>
                  <td>{transaction.details}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Cards;
