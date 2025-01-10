import Header from './Header';

function GetCard() {
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
