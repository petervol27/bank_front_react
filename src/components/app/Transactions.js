function Transactions() {
  return (
    <main>
      <div className="text-center my-2">
        <div
          className="px-3 d-flex justify-content-between align-items-center bg-light gap-3"
          id="accountInfo"
        ></div>
        <div className="bg-light my-2">
          <form>
            <label for="transactionType " className="fw-bold">
              Choose Type Of Transaction
            </label>
            <select
              id="transactionType"
              className="form-select w-25 mx-auto"
            ></select>
          </form>
        </div>
        <form id="transactionForm" className="d-none">
          <div id="formContent" className="p-3 border rounded"></div>
        </form>
      </div>
      <div
        className="modal fade"
        id="transactionModal"
        tabindex="-1"
        aria-labelledby="transactionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="transactionModalLabel">
                Transaction Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" id="modalContent"></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onclick="window.location.href='account.html'"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="check"></div>
    </main>
  );
}

export default Transactions;
{
  /* <script>
  const accountInfo = document.getElementById('accountInfo');
  const fetchAccount = async () => {
    const access = localStorage.getItem('access_token');
    const response = await axios.get(`${PRODHOST}/accounts/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const data = response.data;
    const account = response.data.account;
    const userName = response.data.user.fname + ' ' + response.data.user.lname;
    accountInfo.innerHTML = `
            <h3 className="text-purple">Hello, <strong >${userName}</strong></h3>
            <h4>Account: <span class="text-purple">${
              account.account_num
            }</span></h4>
          <h3>Balance: <span ${
            account.balance >= 0
              ? 'class="text-success"'
              : "class='text-danger'"
          }>${account.balance}</span></h3>`;
    return data;
  };
  const fetchTransactionOptions = async () => {
    const response = await axios.get(`${PRODHOST}/transactions/types/`);
    const types = response.data;
    let typeHTML = `<option value="">Select Transaction Type</option>`;
    types.map((type) => {
      if (
        type[0] == 'withdraw' ||
        type[0] == 'deposit' ||
        type[0] == 'loan' ||
        type[0] == 'credit'
      ) {
      } else {
        let currentHTML = `<option value="${type[0]}">${type[1]}</option>`;
        typeHTML += currentHTML;
      }
    });
    transactionType.innerHTML = typeHTML;
  };
  const fetchAccounts = async () => {
    const access = localStorage.getItem('access_token');
    const accountResponse = await axios.get(`${PRODHOST}/accounts/all/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const userResponse = await axios.get(`${PRODHOST}/users/all/`, {
      headers: { Authorization: `Bearer ${access}` },
    });
    const accounts = accountResponse.data;
    const users = userResponse.data;
    let accountsHTML = `<option value="">Choose Account</option>`;
    const userMap = users.reduce((map, user) => {
      map[user.id] = user;
      return map;
    }, {});

    accounts.forEach((account) => {
      const user = userMap[account.user];
      if (user) {
        accountsHTML += `<option value="${account.id}">${capitalize(
          user.first_name
        )} ${capitalize(user.last_name)} - ${account.account_num}</option>`;
      }
    });
    return accountsHTML;
  };
  const fetchData = async () => {
    await fetchAccount();
    await fetchTransactionOptions();
    const accountOptionsHTML = await fetchAccounts();
    localStorage.setItem('accounts_info', accountOptionsHTML);
    const recieverAccountSelect = document.getElementById('recieverAccount');
    if (recieverAccountSelect) {
      recieverAccountSelect.innerHTML = accountOptionsHTML;
    }
  };
  addEventListener('DOMContentLoaded', async (event) => {
    await fetchData();
  });
  const forms = {
    transfer: `
      <h5 class="text-purple">Transfer To Account</h5>
      <select class="form-select mb-2" id="recieverAccount"></select>
      <input type="number" step=".01" placeholder="Amount" name="transferAmount" id="transferAmount" class="form-control mb-2">
      <button type="submit" class="btn form-btn bg-purple">Submit Transfer</button>
    `,
    salary: `
      <h5 class="text-purple">Salary Form</h5>
      <input type="text" placeholder="Employer Name" name="employerName" id="employerName" class="form-control mb-2">
      <input type="number" step=".01" placeholder="Salary Amount" name="salaryAmount" id="salaryAmount" class="form-control mb-2">
      <button type="submit" class="btn form-btn bg-purple">Submit Salary</button>
    `,
    payment: `
      <h5 class="text-purple">Payment Form</h5>
      <select id="paymentType" class="form-select mb-2">
        <option value="loan">Loan</option>
        <option value="credit">Credit</option>
      </select>
      <input type="number" step=".01" placeholder="Amount" name="paymentAmount" id="paymentAmount" class="form-control mb-2">
      <button type="submit" class="btn form-btn bg-purple">Submit Payment</button>
    `,
    credit_usage: `
      <h5 class="text-purple">Pay using Card</h5>
      <input type="text" placeholder="Business" name="description" id="description" class="form-control mb-2">
      <input type="number" step=".01" placeholder="Amount" name="creditAmount" id="creditAmount" class="form-control mb-2">
      <button type="submit" class="btn form-btn bg-purple">Submit Payment</button>
    `,
  };

  document
    .getElementById('transactionType')
    .addEventListener('change', function () {
      const selectedValue = this.value;
      const transactionForm = document.getElementById('transactionForm');
      const formContent = document.getElementById('formContent');

      if (!selectedValue) {
        transactionForm.classList.add('d-none');
        formContent.innerHTML = '';
        return;
      }
      transactionForm.classList.remove('d-none');
      formContent.innerHTML = forms[selectedValue];
      if (selectedValue === 'transfer') {
        document.getElementById('recieverAccount').innerHTML =
          localStorage.getItem('accounts_info');
      }
    });

  const makeTransaction = async (
    type,
    reciever = null,
    amount,
    details,
    sender = null
  ) => {
    const newTransaction = {
      transaction_type: type,
      reciever_account: reciever,
      amount: amount,
      details: details,
      sender_account: sender,
    };
    const access = localStorage.getItem('access_token');
    const response = await axios.post(
      `${PRODHOST}/transactions/`,
      newTransaction,
      {
        headers: { Authorization: `Bearer ${access}` },
      }
    );
    if (response.data.failure) {
      alert(response.data.failure);
      window.location.href = 'account.html';
    }
  };

  document
    .getElementById('transactionForm')
    .addEventListener('submit', async function (event) {
      event.preventDefault();
      100;
      const transactionType = document.getElementById('transactionType').value;
      let details = '';
      const data = await fetchAccount();
      const account = data.account;
      const user = data.user;
      if (transactionType === 'transfer') {
        const recipientAccountElement =
          document.getElementById('recieverAccount');
        const selectedOption =
          recipientAccountElement.options[
            recipientAccountElement.selectedIndex
          ];
        const recieverAccount = selectedOption.text;
        const recieverId = selectedOption.value;
        const amount = document.getElementById('transferAmount').value;
        const transactionDetails = `${user.fname + ' ' + user.lname} - ${
          account.account_num
        } Transfered ${amount} to ${recieverAccount}`;
        await makeTransaction(
          transactionType,
          recieverId,
          amount,
          transactionDetails,
          account.id
        );
        details = `<p><strong>Transaction Type:</strong> Transfer</p>
               <p><strong>Recipient Account:</strong> ${recieverAccount}</p>
               <p><strong>Amount:</strong> ${amount}</p>`;
      } else if (transactionType === 'salary') {
        const employerName = capitalize(
          document.getElementById('employerName').value
        );
        const amount = document.getElementById('salaryAmount').value;
        const transactionDetails = `Salary from ${employerName} with a sum of ${amount}`;
        await makeTransaction(
          transactionType,
          account.id,
          amount,
          transactionDetails
        );
        details = `<p><strong>Transaction Type:</strong> Salary</p>
               <p><strong>Employer Name:</strong> ${employerName}</p>
               <p><strong>Amount:</strong> ${amount}</p>`;
      } else if (transactionType === 'credit_usage') {
        const description = capitalize(
          document.getElementById('description').value
        );
        const amount = document.getElementById('creditAmount').value;
        const transactionDetails = `Used card for ${description}, the price: ${amount}`;
        details = `<p><strong>Transaction Type:</strong> Card Usage</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Amount:</strong> ${amount}</p>`;
        const use_card = async () => {
          const newTransaction = {
            amount: amount,
            details: transactionDetails,
          };
          const access = localStorage.getItem('access_token');
          const response = await axios.post(
            `${PRODHOST}/cards/use_card/`,
            newTransaction,
            {
              headers: { Authorization: `Bearer ${access}` },
            }
          );
          if (response.data.failure) {
            alert(response.data.failure);
            window.location.reload();
          }
        };
        await use_card();
      } else if (transactionType === 'payment') {
        let paymentType = document.getElementById('paymentType').value;
        const amount = document.getElementById('paymentAmount').value;
        if (paymentType == 'loan') {
          let transactionDetails = `Payed ${amount} for Loan`;
          await makeTransaction(
            paymentType,
            null,
            amount,
            transactionDetails,
            account.id
          );
        } else {
          paymentType = 'credit';
          transactionDetails = `Payed off ${amount} from Credit Card`;
          await makeTransaction(
            paymentType,
            null,
            amount,
            transactionDetails,
            account.id
          );
        }
        details = `<p><strong>Transaction Type:</strong> Payment</p>
               <p><strong>Type:</strong> ${paymentType}</p>
               <p><strong>Amount:</strong> ${amount}</p>`;
      }

      document.getElementById('modalContent').innerHTML = details;
      const transactionModal = new bootstrap.Modal(
        document.getElementById('transactionModal')
      );
      transactionModal.show();
    });
</script> */
}
