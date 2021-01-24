// imports =====================================>

import React, { useState } from "react";
import { Link } from "react-router-dom";

// application =================================>

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container my-1">
      <div className="contact">
        <form className="contact-form" onSubmit={handleFormSubmit}>
          <h1>Login</h1>
          <div className="contact-group">
            <label className="contact-label" htmlFor="email">
              Email address:
            </label>
            <input
              className="contact-text"
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="contact-group">
            <label className="contact-label" htmlFor="pwd">
              Password:
            </label>
            <input
              className="contact-text"
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>
          <div className="contact-group">
            <a>
              Don't have an account?{" "}
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </a>
          </div>
          <div className="flex-row flex-end">
            <button className="contact-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// exports =====================================>

export default Login;
