import React, {useState} from "react";
import { Link, useParams } from "react-router-dom";
import TransactionList from "../components/TransactionList";
import Modal from "react-modal";

const Detail = () => {
    const [accounts] = useState([
        {
            name: "Savings Account",
            balance: '$73,500'
        },
        {
            name: "Checking Account",
            balance: "$37,225"
        },
        {
            name: "Daughter's College Fund",
            balance: "$15,750"
        }
    ]);

    const [formState, setFormState] = useState({ email: '', password: '' })

    const handleFormSubmit = async event => {
      event.preventDefault();
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };

  const { id } = useParams();
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    const [modalIsOpenWithdraw, setIsOpenWithdraw] = useState(false);
    function openModalWithdraw() {
        setIsOpenWithdraw(true);
    }
    
    function afterOpenModalWithdraw() {
        // references are now sync'd and can be accessed.
    }
    
    function closeModalWithdraw(){
        setIsOpenWithdraw(false);
    }

  return (
      <div>
        <div className = "detail-header">
            <div className = "detail-info">
                <h1 className = "detail-name">{accounts[id].name}</h1>
                <h3 className = "detail-balance">Balance: {accounts[id].balance}</h3>
            </div>
            <button className = "detail-withdraw" onClick={openModal}>Withdraw</button>
            <Modal
                className = "withdraw-modal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                overlayClassName="withdraw-overlay"
                contentLabel="Example Modal"
                >

                <form className = "withdraw-form" onSubmit={handleFormSubmit}>
                    <h1>Withdraw</h1>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="transactionName">Transaction Name:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="Enter Transaction Name"
                            name="transactionName"
                            type="transactionName"
                            id="transactionName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="amount">Amount:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="$0"
                            name="amount"
                            type="amount"
                            id="amount"
                            onChange={handleChange}
                        />
                    </div>
                    <button className = "contact-button" type="submit">
                        Submit
                    </button>
                </form>
            </Modal>
            <button className = "detail-deposit" onClick={openModalWithdraw}>Deposit</button>
            <Modal
                className = "withdraw-modal"
                isOpen={modalIsOpenWithdraw}
                onAfterOpen={afterOpenModalWithdraw}
                onRequestClose={closeModalWithdraw}
                overlayClassName="withdraw-overlay"
                contentLabel="Example Modal"
                >

                <form className = "deposit-form" onSubmit={handleFormSubmit}>
                    <h1>Deposit</h1>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="transactionName">Transaction Name:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="Enter Transaction Name"
                            name="transactionName"
                            type="transactionName"
                            id="transactionName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="amount">Amount:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="$0"
                            name="amount"
                            type="amount"
                            id="amount"
                            onChange={handleChange}
                        />
                    </div>
                    <button className = "contact-button" type="submit">
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
        <div className = "transactions-header">
            <h1 className = "transactions-h1">Past Transactions: </h1>
            <h3 className = "transactions-h3">Old Balance: </h3>
            <h3 className = "transactions-h3">New Balance: </h3>
        </div>
        <TransactionList></TransactionList>
      </div>
  );
};

export default Detail;
