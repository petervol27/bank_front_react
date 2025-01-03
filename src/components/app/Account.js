function Account() {
  return (
    <div>
      <main className="main-accounts">
        <div
          className="ms-3 mt-3 text-purple d-flex justify-content-between align-items-center user-info"
          id="accountHeading"
        ></div>
        <div className="my-3 bg-light text-center p-3" id="accountInfo"></div>
        <form
          className="container d-flex justify-content-center align-items-center gap-2 mb-3"
          id="withdrawDepositForm"
        >
          <input
            type="number"
            className="form-control w-25"
            placeholder="Enter Amount Here"
            id="amountInput"
            required
          />

          <button
            className="btn btn-danger"
            type="submit"
            name="action"
            value="withdraw"
          >
            Withdraw
          </button>
          <button
            className="btn btn-primary"
            type="submit"
            name="action"
            value="deposit"
          >
            Deposit
          </button>
        </form>
        <div className="accordion" id="tableAccordion">
          <div className="table-responsive-lg">
            <table className="table table-hover">
              <thead className="table-active">
                <tr>
                  <th>Date</th>
                  <th>Action</th>
                  <th>Expanse</th>
                  <th>Income</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody id="tableBody"></tbody>
            </table>
          </div>
        </div>
      </main>
      <footer className="bg-light p-3 text-center">
        <h1 className="text-purple">Neo Banking</h1>
        <ul className="list-group w-25 mx-auto mt-3 contact-details">
          <li className="list-group-item">
            Email: <strong>NeoBanking@neo.com</strong>
          </li>
          <li className="list-group-item">
            Phone: <strong>+972551472398</strong>
          </li>
          <li className="list-group-item">
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

export default Account;
{
  /* <script>
  const accountHeading = document.getElementById('accountHeading');
  const accountInfo = document.getElementById('accountInfo');
  const fetchAccountDetails = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const data = response.data;
    return data;
  };
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountHeading.innerHTML = `<h1>Welcome, <strong>${userName}!</strong></h1> <a className="btn bg-purple login-txt text-white me-3" href="./transactions.html">Make a Transaction</a>`;
    accountInfo.innerHTML = `<h3> Account:<strong className="text-purple"> ${
      account.account_num
    }</strong></h3>
        <p><strong>Branch</strong>: <strong className="text-purple">${
          account.branch
        }</strong></p>
        <p id="accountBalance" className="fs-4"><strong>Current Balance</strong>:<strong ${
          account.balance >= 0 ? 'className="text-success"' : "className='text-danger'"
        }> ${account.balance}</strong></p>`;
  };
  const fetchHistory = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/transactions/history/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const data = await fetchAccountDetails();
    const account = data.account;
    const user = data.user;
    const transactions = response.data;
    const tableBody = document.getElementById('tableBody');
    let historyHTML = ``;
    transactions.map((transaction) => {
      let transactionHTML = `<tr
              data-bs-toggle="collapse"
              data-bs-target="#collapseRow${transaction.id}"
              aria-expanded="false"
              aria-controls="collapseRow${transaction.id}"
            ><td className="fw-bold">${transaction.formatted_date}</td>
              <td>${capitalize(transaction.transaction_type)}</td>
           ${
             transaction.reciever_account == account.id
               ? `<td className="text-danger"></td><td className="text-success">${transaction.amount}</td><td className="fw-bold">${transaction.reciever_new_balance}</td>`
               : `<td className="text-danger">${transaction.amount}</td><td className="text-success"></td><td className="fw-bold">${transaction.sender_new_balance}</td>`
           }

            </tr>
            <tr
              id="collapseRow${transaction.id}"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#tableAccordion"
            >
              <td colspan="5">
                <div className="p-3">
                  <strong>Details:</strong> ${transaction.details}
                </div>
              </td>
            </tr>`;
      historyHTML += transactionHTML;
    });
    tableBody.innerHTML = historyHTML;
  };
  document
    .getElementById('withdrawDepositForm')
    .addEventListener('submit', async function (event) {
      event.preventDefault();
      const amount = document.getElementById('amountInput').value;

      if (!amount || amount <= 0) {
        alert('Please enter a valid amount.');
        return;
      }
      const action = event.submitter.value;
      const access = localStorage.getItem('access_token');
      const data = await fetchAccountDetails();
      const account = data.account.id;
      if (action === 'withdraw') {
        console.log(`Withdrawing amount: ${amount}`);
        const details = `Withdrew ${amount} from account`;
        const newTransaction = {
          transaction_type: action,
          reciever_account: null,
          amount: amount,
          details: details,
          sender_account: account,
        };
        const response = await axios.post(
          `${PRODHOST}/transactions/`,
          newTransaction,
          {
            headers: { Authorization: `Bearer ${access}` },
          }
        );
        alert(`You Withdrew ${amount} succesfully!`);
        window.location.reload();
      } else if (action === 'deposit') {
        const details = `Deposited ${amount} to account`;
        const newTransaction = {
          transaction_type: action,
          reciever_account: account,
          amount: amount,
          details: details,
          sender_account: null,
        };
        const response = await axios.post(
          `${PRODHOST}/transactions/`,
          newTransaction,
          {
            headers: { Authorization: `Bearer ${access}` },
          }
        );
        alert(`You Deposited ${amount} succesfully!`);
        window.location.reload();
      }
    });
  addEventListener('DOMContentLoaded', async (event) => {
    await fetchAccount();
    await fetchHistory();
  });
</script> */
}
