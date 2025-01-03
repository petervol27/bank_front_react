function TakeLoan() {
  return (
    <div>
      {' '}
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
                  <a class="nav-link text-purple" href="./cards.html">
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
        <div class="container text-center bg-light p-3">
          <p class="fw-bold fs-4 text-purple">
            Hello welcome to our loan request page, you may pick any amount for
            a loan, payments will be divided between 6 months and 36 months,
            please remember being late on your payment will be taxed heavily so
            please make sure you pay on time thank you!
          </p>
        </div>
        <form id="loanForm" class="container p-3 w-50 mx-auto bg-light my-3">
          <h3 class="text-center text-purple fw-bold">Loan Request</h3>
          <label class="form-label">Amount</label>
          <input
            class="form-control"
            type="number"
            name="amount"
            id="amount"
            required
          />
          <label class="form-label mt-3">
            Payments: <span id="paymentValue"></span>
          </label>
          <input
            required
            class="form-control"
            type="range"
            min="6"
            max="36"
            name="payments"
            id="payments"
            oninput="updatePaymentValue(this.value)"
          />
          <div class="text-center mt-3">
            <button class="btn form-btn bg-purple text-center" type="submit">
              Request Loan
            </button>
          </div>
        </form>
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

export default TakeLoan;
{
  /* <script>
  const accountHeading = document.getElementById('accountHeading');
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> `;
  };

  addEventListener('DOMContentLoaded', async (event) => {
    await fetchAccount();
  });
  const updatePaymentValue = (value) => {
    document.getElementById('paymentValue').textContent = value;
  };
  const form = document.getElementById('loanForm');
  const loanRequest = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const amount = formData.get('amount');
    const payments = formData.get('payments');
    const newLoan = { amount: amount, payments: payments };
    const access = localStorage.getItem('access_token');
    const response = await axios.post(
      `${PRODHOST}/loans/request_loan/`,
      newLoan,
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    const check = response.data;
    if (response.data.failure) {
      alert('sorry you already have an active loan');
      window.location.href = 'account.html';
      return;
    }
    const loanAmount = response.data.amount;
    alert(`${loanAmount} is being transfered to your account now!`);
    window.location.href = 'account.html';
  };
  form.addEventListener('submit', loanRequest);
</script> */
}
