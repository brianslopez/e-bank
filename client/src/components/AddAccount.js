// imports =====================================>

import React, { Component } from "react";
import { graphql } from "react-apollo";
import { addAccountMutation, getAccountsQuery } from "./queries";

// application =================================>

class AddAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      balance: 0,
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.addAccountMutation({
      variables: {
        name: this.state.name,
        balance: parseInt(this.state.balance),
        customer_id: "5ffcd772177eb510d0687664",
      },
      refetchQueries: [{ query: getAccountsQuery }],
    });
  }
  render() {
    return (
      <form className="account-form" onSubmit={this.submitForm.bind(this)}>
        <h1>Add New Account </h1>
        <div className="account-group">
          <label className="account-label" htmlFor="accountName">
            Account Name:
          </label>
          <input
            className="account-text"
            placeholder="Enter Account Name"
            name="accountName"
            type="accountName"
            id="accountName"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="account-group">
          <label className="account-label" htmlFor="amount">
            Initial Amount:{" "}
          </label>
          <input
            className="account-text"
            placeholder="$0"
            name="amount"
            type="amount"
            id="amount"
            onChange={(e) => this.setState({ balance: e.target.value })}
          />
        </div>
        <button className="contact-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

// exports =====================================>

export default graphql(addAccountMutation, { name: "addAccountMutation" })(
  AddAccount
);
