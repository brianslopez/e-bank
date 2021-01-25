import React, {useState} from "react";
import AccountList from "../components/AccountList";
import Modal from "react-modal";
import { useMutation } from '@apollo/react-hooks';
import { ADD_ACCOUNT } from '../utils/mutations';
import { useQuery } from '@apollo/react-hooks';
import { GET_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Home = () => {
    const { loading, data } = useQuery(GET_ME);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [formState, setFormState] = useState({ name: '', balance:'' });
    const [addAccount] = useMutation(ADD_ACCOUNT);

    const handleFormSubmit = async event => {
        event.preventDefault();
        try {
          await addAccount({ variables: {name: formState.name, balance: parseFloat(formState.balance)} });
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

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    if(!Auth.loggedIn()) return null;
  return (
    <div>
        <div className = "home-header">
            <h1 className = "page-header">{!loading && `${data.me.firstname} ${data.me.lastname}'s `} Accounts</h1>
            <button className = "new-account" onClick={openModal}>Click here to add a new account</button>
            <Modal
                className = "account-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                overlayClassName="account-overlay"
                >
                <form className = "account-form" onSubmit={handleFormSubmit}>
                    <h1>Add New Account </h1>
                    <div className="account-group">
                        <label className="account-label" htmlFor="name">Account Name:</label>
                        <input
                            className = "account-text"
                            placeholder="Enter Account Name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="account-group">
                        <label className="account-label" htmlFor="balance">Initial Balance: </label>
                        <input
                            className = "account-text"
                            placeholder="$0"
                            name="balance"
                            value={formState.balance}
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
