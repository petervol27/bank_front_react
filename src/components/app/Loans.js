function Loans() {
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
                  <a class="nav-link text-purple active" href="./loans.html">
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
        <div
          class="container bg-light py-2 mt-2 mb-3 border rounded"
          id="loanList"
        ></div>
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

export default Loans;
{
  /* <script>
  const accountHeading = document.getElementById('accountHeading');
  const loanList = document.getElementById('loanList');
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> <a class="btn bg-purple login-txt text-white me-3" href="./takeLoan.html">Take a Loan</a>`;
  };
  const fetchLoans = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/loans/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const loan = response.data;
    if (loan == 0) {
      let loanHTML = `<h1 class="text-purple text-center">No Loans</h1>`;
      loanList.innerHTML = loanHTML;
    } else {
      let loanHTML = `<ul class="list-group m-3"><h3 class="text-center text-purple">Loan: <strong>${loan.loan_number}</strong></h3><li class="list-group-item">Date Taken: ${loan.date_taken}</li><li class="list-group-item">Amount Taken: ${loan.amount}</li><li class="list-group-item">Spread To: ${loan.payments} Payments</li><li class="list-group-item">Due By: ${loan.date_finished}</li><li class="list-group-item">Left to Pay: ${loan.left_to_pay}</li><a class="btn bg-purple form-btn w-25 mx-auto mt-3" href="./transactions.html">Pay Off</a></ul>`;
      loanList.innerHTML = loanHTML;
    }
  };
  addEventListener('DOMContentLoaded', async (event) => {
    await fetchAccount();
    await fetchLoans();
  });
</script> */
}
