function GetCard() {
  return (
    <main>
      <div
        className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info"
        id="accountHeading"
      ></div>
      <div className="container text-center bg-light p-3">
        <p className="fw-bold fs-4 text-purple">
          Hello welcome to our credit cards request page, you may pick any
          manufactor for a card, payments will be taken during the 1st of each
          month or 10th of each month, please remember being late on your
          payment will be taxed heavily so please make sure you pay on time
          thank you!
        </p>
      </div>
      <form id="cardForm" className="container p-3 w-50 mx-auto bg-light my-3">
        <h3 className="text-center text-purple fw-bold">Card Request</h3>
        <label className="form-label">Manufactorer:</label>
        <select
          className="form-select"
          id="manufactorOptions"
          name="manufactorOptions"
        ></select>
        <label className="form-label">Payment Day:</label>
        <select
          className="form-select"
          id="payOptions"
          name="payOptions"
        ></select>
        <label className="form-label mt-3">
          Credit Limit: <span id="creditValue"></span>
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
          oninput="updateCreditValue(this.value)"
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
{
  /* <script>
  const accountHeading = document.getElementById('accountHeading');
  const form = document.getElementById('cardForm');
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> `;
  };
  const fetchFormData = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/cards/get_form_data/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    console.log(response.data);
    const manufactorers = response.data.manufactorers;
    const paymentDays = response.data.payment_days;
    const manufactorOptions = document.getElementById('manufactorOptions');
    const payOptions = document.getElementById('payOptions');
    let payDaysHTML = ``;
    let manufactorersHTML = ``;
    paymentDays.map((payDay) => {
      let objectHTML = `<option value='${payDay[0]}'>${payDay[1]}</option>`;
      payDaysHTML += objectHTML;
    });
    manufactorers.map((manufactorer) => {
      let objectHTML = `<option value='${manufactorer[0]}'>${manufactorer[0]}</option>`;
      manufactorersHTML += objectHTML;
    });
    payOptions.innerHTML = payDaysHTML;
    manufactorOptions.innerHTML = manufactorersHTML;
  };

  addEventListener('DOMContentLoaded', async (event) => {
    await fetchAccount();
    await fetchFormData();
  });

  const updateCreditValue = (value) => {
    document.getElementById('creditValue').textContent = value;
  };
  const cardRequest = async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const limit = formData.get('limit');
    const payOptions = formData.get('payOptions');
    const manufactorOptions = formData.get('manufactorOptions');
    const access = localStorage.getItem('access_token');
    const newCard = {
      manufacturer: manufactorOptions,
      credit_limit: limit,
      payment_date: payOptions,
    };
    const response = await axios.post(`${PRODHOST}/cards/`, newCard, {
      headers: { Authorization: `Bearer ${access}` },
    });
    if (response.data.failure) {
      alert(response.data.failure);
      window.location.href = 'cards.html';
    } else {
      alert('congratulations on your new card!');
      window.location.href = 'cards.html';
    }
  };
  form.addEventListener('submit', cardRequest);
</script> */
}
