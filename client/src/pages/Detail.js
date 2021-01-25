import React, {useState} from "react";
import { useParams } from "react-router-dom";
import TransactionList from "../components/TransactionList";
import Modal from "react-modal";

import { useQuery } from '@apollo/react-hooks';
import { GET_ACCOUNT } from '../utils/queries';

import { useMutation } from '@apollo/react-hooks';
import { ADD_TRANSACTION, EDIT_ACCOUNT} from '../utils/mutations';

const Detail = () => {
    const { id } = useParams();
    const { loading, data } = useQuery(GET_ACCOUNT, {
        variables: {accountID: id}
    });

    const [formState, setFormState] = useState({ name: '', amount: '' });
    const [formStateW, setFormStateW] = useState({ name: '', amount: '' });

    const [addTransaction] = useMutation(ADD_TRANSACTION);
    const [editAccount] = useMutation(EDIT_ACCOUNT);

    const handleFormSubmit = async event => {
      if(loading) return;
      event.preventDefault();
      try {
        const account = data.getAccount;
        const updatedbalance = account.balance - parseFloat(formState.amount);
        await addTransaction({ variables: {accountID: account._id, name: formState.name, oldbalance: account.balance, newbalance: updatedbalance} });
        await editAccount({variables: {accountID: account._id, name: account.name, balance: updatedbalance}})
        closeModal();
        window.location.reload();
      } catch (e) {
        console.log(e)
      }
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };

    const handleFormSubmitW = async event => {
        if(loading) return;
        event.preventDefault();
        try {
          const account = data.getAccount;
          const updatedbalance = account.balance + parseFloat(formStateW.amount);
          await addTransaction({ variables: {accountID: account._id, name: formStateW.name, oldbalance: account.balance, newbalance: updatedbalance} });
          await editAccount({variables: {accountID: account._id, name: account.name, balance: updatedbalance}})
          closeModal();
          window.location.reload();
        } catch (e) {
          console.log(e)
        }
    };
    
    const handleChangeW = event => {
        const { name, value } = event.target;
        setFormStateW({
          ...formStateW,
          [name]: value
        });
    };

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }

    const [modalIsOpenWithdraw, setIsOpenWithdraw] = useState(false);
    function openModalWithdraw() {
        setIsOpenWithdraw(true);
    }
    
    function closeModalWithdraw(){
        setIsOpenWithdraw(false);
    }

  return (
      <div>
        <div className = "detail-header">
            { !loading && data.getAccount &&
                <div className = "detail-info">
                    <h1 className = "detail-name">{data.getAccount.name}</h1>
                    <h3 className = "detail-balance">Balance: ${data.getAccount.balance}</h3>
                </div>
            }
            <button className = "detail-withdraw" onClick={openModal}>Withdraw</button>
            <Modal
                className = "withdraw-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="withdraw-overlay"
                contentLabel="Example Modal"
                >

                <form className = "withdraw-form" onSubmit={handleFormSubmit}>
                    <h1>Withdraw</h1>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="name">Transaction Name:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="Enter Transaction Name"
                            name="name"
                            value = {formState.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="amount">Amount:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="$0"
                            name="amount"
                            value = {formState.amount}
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
                onRequestClose={closeModalWithdraw}
                overlayClassName="withdraw-overlay"
                contentLabel="Example Modal"
                >

                <form className = "deposit-form" onSubmit={handleFormSubmitW}>
                    <h1>Deposit</h1>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="name">Transaction Name:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="Enter Transaction Name"
                            name="name"
                            value = {formStateW.name}
                            onChange={handleChangeW}
                        />
                    </div>
                    <div className="withdraw-group">
                        <label className="withdraw-label" htmlFor="amount">Amount:</label>
                        <input
                            className = "withdraw-text"
                            placeholder="$0"
                            name="amount"
                            value = {formStateW.amount}
                            onChange={handleChangeW}
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
