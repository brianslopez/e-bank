import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login] = useMutation(LOGIN_USER);

  const handleFormSubmit = async event => {
    event.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } })
      const token = mutationResponse.data.login.token;
      Auth.login(token);
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

  return (
    <div className="container my-1">
      <div className = "contact">
      <form className = "contact-form" onSubmit={handleFormSubmit}>
        <h1>Login</h1>
        <div className="contact-group">
          <label className = "contact-label" htmlFor="email">Email address:</label>
          <input
            className = "contact-text"
            placeholder="youremail@test.com"
            name= "email"
            value = {formState.email}
            onChange={handleChange}
          />
        </div>
        <div className="contact-group">
          <label className = "contact-label" htmlFor="pwd">Password:</label>
          <input
            className = "contact-text"
            placeholder="******"
            name = "password"
            value = {formState.password}
            onChange={handleChange}
          />
        </div>
        <div className = "contact-group">
            <div className = "contact-label">Don't have an account? <Link to="/signup" style={{ textDecoration: 'none' }}>Signup</Link></div>
        </div>
        <div className="flex-row flex-end">
          <button className = "contact-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}


export default Login;
