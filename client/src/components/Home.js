// imports =====================================>

import React, { useState } from "react";
import AccountList from "./AccountList";
import Modal from "react-modal";
import AddAccount from "./AddAccount";

// application =================================>

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState({ email: "", password: "" });

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <div className="home-header">
        <h1 className="page-header">My Accounts</h1>
        <button className="new-account" onClick={openModal}>
          Click here to add a new account
        </button>
        <Modal
          className="account-modal"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          overlayClassName="account-overlay"
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className="modal-button">
            Close
          </button>
          <AddAccount></AddAccount>
        </Modal>
      </div>
      <AccountList></AccountList>
    </div>
  );
};

// exports =====================================>

export default Home;
