function TakeLoan() {
  return (
    <main>
      <div
        className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info"
        id="accountHeading"
      ></div>
      <div className="container text-center bg-light p-3">
        <p className="fw-bold fs-4 text-purple">
          Hello welcome to our loan request page, you may pick any amount for a
          loan, payments will be divided between 6 months and 36 months, please
          remember being late on your payment will be taxed heavily so please
          make sure you pay on time thank you!
        </p>
      </div>
      <form id="loanForm" className="container p-3 w-50 mx-auto bg-light my-3">
        <h3 className="text-center text-purple fw-bold">Loan Request</h3>
        <label className="form-label">Amount</label>
        <input
          className="form-control"
          type="number"
          name="amount"
          id="amount"
          required
        />
        <label className="form-label mt-3">
          Payments: <span id="paymentValue"></span>
        </label>
        <input
          required
          className="form-control"
          type="range"
          min="6"
          max="36"
          name="payments"
          id="payments"
          oninput="updatePaymentValue(this.value)"
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
