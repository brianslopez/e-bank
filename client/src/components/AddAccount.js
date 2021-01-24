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
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
          <label>Account Name:</label>
          <input
            type="text"
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>

        <div className="field">
          <label>Opening Balance:</label>
          <input
            type="number"
            onChange={(e) => this.setState({ balance: e.target.value })}
          />
        </div>

        <button>add account</button>
      </form>
    );
  }
}

// exports =====================================>

export default graphql(addAccountMutation, { name: "addAccountMutation" })(
  AddAccount
);
