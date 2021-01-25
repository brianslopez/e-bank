import React, {useState} from "react";
import {Link} from "react-router-dom";
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ firstname: '', lastname: '', username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

  // submit form (notice the async!)
    const handleFormSubmit = async event => {
      event.preventDefault();

      // use try/catch instead of promises to handle errors
      try {
        // execute addUser mutation and pass in variable data from form
        console.log(formState);
        const { data } = await addUser({
          variables: { ...formState }
        });
        
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  
    const handleChange = event => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value
      });
    };

    return (
        <div className="container my-1">
          <div className = "contact">
          <form className = "contact-form" onSubmit={handleFormSubmit}>
            <h1>Signup</h1>
            <div className="contact-group">
                <label className="contact-label" htmlFor="firstname">First Name:</label>
                <input
                    className = "contact-text"
                    placeholder="First"
                    name="firstname"
                    type="firstname"
                    id="firstname"
                    value={formState.firstname}
                    onChange={handleChange}
                />
            </div>
            <div className="contact-group">
                <label className="contact-label" htmlFor="lastname">Last Name:</label>
                <input
                    className = "contact-text"
                    placeholder="Last"
                    name="lastname"
                    type="lastname"
                    id="lastname"
                    value={formState.lastname}
                    onChange={handleChange}
                />
            </div>
            <div className="contact-group">
                <label className="contact-label" htmlFor="username">Username:</label>
                <input
                    className = "contact-text"
                    placeholder="username"
                    name="username"
                    type="username"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                />
            </div>
            <div className="contact-group">
              <label className = "contact-label" htmlFor="email">Email address:</label>
              <input
                className = "contact-text"
                placeholder="youremail@test.com"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-group">
              <label className = "contact-label" htmlFor="pwd">Password:</label>
              <input
                className = "contact-text"
                placeholder="******"
                name="password"
                type="password"
                id="pwd"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            <div className = "contact-group">
                <div className = "contact-label">Already have an account? <Link to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>
            </div>
            <button className = "contact-button" type="submit">
                Submit
            </button>
            {error && <div>Sign up failed</div>}
          </form>
          </div>
        </div>
      );
};

export default Signup;