import React, {useState} from "react";
import AccountList from "../components/AccountList";
import Modal from "react-modal";

const Home = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
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

    function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
    }
    
    function closeModal(){
        setIsOpen(false);
    }
  return (
    <div>
        <div class = "home-header">
            <h1 class = "page-header">My Accounts</h1>
            <button class = "new-account" onClick={openModal}>Click here to add a new account</button>
            <Modal
                className = "account-modal"
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                overlayClassName="account-overlay"
                contentLabel="Example Modal"
                >
                <form className = "account-form" onSubmit={handleFormSubmit}>
                    <h1>Add New Account </h1>
                    <div className="account-group">
                        <label className="account-label" htmlFor="accountName">Account Name:</label>
                        <input
                            className = "account-text"
                            placeholder="Enter Account Name"
                            name="accountName"
                            type="accountName"
                            id="accountName"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="account-group">
                        <label className="account-label" htmlFor="amount">Initial Amount: </label>
                        <input
                            className = "account-text"
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
        <AccountList></AccountList>
    </div>
  );
};

export default Home;
