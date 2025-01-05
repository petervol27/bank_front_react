function Cards() {
  return (
    <main>
      <div
        className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info"
        id="accountHeading"
      ></div>
      <div className="container">
        <div className="pt-2 mt-2" id="cardList"></div>
        <table className="table border">
          <thead className="table-active">
            <tr>
              <th>Date</th>
              <th>Amount</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody id="tableBody"></tbody>
        </table>
      </div>
    </main>
  );
}

export default Cards;
{
  /* <script>
  const accountHeading = document.getElementById('accountHeading');
  const cardList = document.getElementById('cardList');
  const tableBody = document.getElementById('tableBody');
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> <a className="btn bg-purple login-txt text-white me-3" href="./getCard.html">Get a Card</a>`;
  };
  const fetchCard = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/cards/get_card/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const card = response.data;
    if (card == 0) {
      cardList.innerHTML = `<h1 className="text-purple text-center">No Cards available</h1>`;
      return;
    }
    let cardHTML = `<div className="card">
    <div className="card-header text-center fw-bold">
      ${card.card_number} - ${card.expiration_date} - ${card.cvv}
    </div>
    <div className="card-body text-center">
      <h5 className="card-title">Owner: ${card.owner_name}</h5>
      <p className="card-text">Payment date: ${card.payment_date} of each month</p>
      <p className="card-text">Manufactorer: <strong>${card.manufacturer}</strong></p>
      <p className="card-text">Credit Limit: <strong>${card.credit_limit}</strong></p>
      <p className="card-text">Credit Used: <strong>${card.current_credit_used}</strong></p>
      <a className="btn bg-purple form-btn" href="transactions.html">Use Card</a>
    </div>
  </div>`;
    cardList.innerHTML = cardHTML;
  };
  const fetchCardHistory = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/cards/card_history/`, {
      headers: { Authorization: `Bearer ${access}` },
    });

    const transactions = response.data;
    if (transactions == 0) {
      return;
    }
    let finalHTML = ``;
    transactions.map((transaction) => {
      let transactionHTML = `<tr>
        <td>${transaction.formatted_date}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.details}</td>
        </tr>`;
      finalHTML += transactionHTML;
    });
    tableBody.innerHTML = finalHTML;
  };
  addEventListener('DOMContentLoaded', async (event) => {
    await fetchAccount();
    await fetchCard();
    await fetchCardHistory();
  });
</script> */
}
