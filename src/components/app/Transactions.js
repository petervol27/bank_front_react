import { useContext, useEffect, useRef, useState } from 'react';
import AccountContext from '../../AccountContext';
import TransactionForm from './TransactionForm';
import AuthContext from '../../AuthContext';
import { useNavigate } from 'react-router-dom';
function Transactions() {
  const navigate = useNavigate();
  const { accountNum } = useContext(AccountContext);
  const { accountBalance } = useContext(AccountContext);
  const [transactionType, setTransactionType] = useState('');
  const handleTransactionType = (e) => {
    setTransactionType(e.target.value);
  };
  const { username, setUsername } = useContext(AuthContext);
  const [modalContent, setModalContent] = useState('');
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/account');
  };
  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.focus();
    }
  }, [showModal]);
  return (
    <main>
      <div className="text-center my-2">
        <div
          className="px-3 d-flex justify-content-between align-items-center bg-light gap-3"
          id="accountInfo"
        >
          <h3 className="text-purple">
            Hello, <strong>{username}</strong>
          </h3>
          <h4>
            Account: <span className="text-purple">{accountNum}</span>
          </h4>
          <h3>
            Balance:
            <span
              className={accountBalance >= 0 ? 'text-success' : 'text-danger'}
            >
              {' '}
              {accountBalance}
            </span>
          </h3>
        </div>
        <div className="bg-light my-2">
          <form>
            <label htmlFor="transactionType" className="fw-bold">
              Choose Type Of Transaction
            </label>
            <select
              id="transactionType"
              className="form-select w-25 mx-auto"
              onChange={handleTransactionType}
            >
              <option value="">Select Transaction Type</option>
              <option value="transfer">Transfer</option>
              <option value="salary">Salary</option>
              <option value="payment">Payment</option>
              <option value="credit_usage">Pay With Card</option>
            </select>
          </form>
        </div>
        {transactionType && (
          <TransactionForm
            type={transactionType}
            onFormSubmit={handleShowModal}
          />
        )}

        {showModal && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Transaction Details</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body" ref={modalRef} tabIndex={-1}>
                  <p>{modalContent}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Transactions;
