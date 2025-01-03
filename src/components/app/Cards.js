function Cards() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-sm bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="./account.html">
              <h3 class="text-purple">Neo Banking</h3>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link text-purple" href="./account.html">
                    Overview
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-purple" href="./loans.html">
                    My Loans
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-purple active" href="./cards.html">
                    My Cards
                  </a>
                </li>
                <li class="nav-item mt-2">
                  <a
                    class="nav-link bg-purple login-txt d-inline px-5 py-2"
                    id="logoutBtn"
                    href="#"
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <div
          class="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info"
          id="accountHeading"
        ></div>
        <div class="container">
          <div class="pt-2 mt-2" id="cardList"></div>
          <table class="table border">
            <thead class="table-active">
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
      <footer class="bg-light p-3 text-center">
        <h1 class="text-purple">Neo Banking</h1>
        <ul class="list-group w-25 mx-auto mt-3 contact-details">
          <li class="list-group-item">
            Email: <strong>NeoBanking@neo.com</strong>
          </li>
          <li class="list-group-item">
            Phone: <strong>+972551472398</strong>
          </li>
          <li class="list-group-item">
            Address:
            <strong>
              HaGanavim 15, Kiryat Ganav 752-198 , Gush Dan, Israel
            </strong>
          </li>
        </ul>
      </footer>
    </div>
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
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> <a class="btn bg-purple login-txt text-white me-3" href="./getCard.html">Get a Card</a>`;
  };
  const fetchCard = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/cards/get_card/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const card = response.data;
    if (card == 0) {
      cardList.innerHTML = `<h1 class="text-purple text-center">No Cards available</h1>`;
      return;
    }
    let cardHTML = `<div class="card">
    <div class="card-header text-center fw-bold">
      ${card.card_number} - ${card.expiration_date} - ${card.cvv}
    </div>
    <div class="card-body text-center">
      <h5 class="card-title">Owner: ${card.owner_name}</h5>
      <p class="card-text">Payment date: ${card.payment_date} of each month</p>
      <p class="card-text">Manufactorer: <strong>${card.manufacturer}</strong></p>
      <p class="card-text">Credit Limit: <strong>${card.credit_limit}</strong></p>
      <p class="card-text">Credit Used: <strong>${card.current_credit_used}</strong></p>
      <a class="btn bg-purple form-btn" href="transactions.html">Use Card</a>
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
