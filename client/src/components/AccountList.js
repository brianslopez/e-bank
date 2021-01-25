// imports =====================================>

import React, { Component } from "react";
import { graphql } from "react-apollo";
import {
  getAccountsQuery,
  updateAccountMutation,
  deleteAccountMutation,
} from "./queries";
import { Link } from "react-router-dom";

// application =================================>

class AccountList extends Component {
  updateAccount(e) {
    e.preventDefault();
    this.props.updateAccountMutation({
      variables: {
        id: this.state.id,
        balance: parseInt(this.state.balance),
      },
      refetchQueries: [{ query: getAccountsQuery }],
    });
  }

  deleteAccount(e) {
    e.preventDefault();
    this.props.deleteAccountMutation({
      variables: {
        id: this.state.id,
      },
      refetchQueries: [{ query: getAccountsQuery }],
    });
  }

  displayAccounts() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Accounts...</div>;
    } else {
      return data.accounts.map((account) => {
        return (
          <section key={account.id} className="account-list">
            <div className="accounts-container">
              <article className="account">
                <form>
                  <div>Account Name: {account.name}</div>
                  <div>
                    Account Balance:
                    <input placeholder={account.balance}></input>
                    <button onClick={this.updateAccount.bind(this)}>
                      Update
                    </button>
                    <button onClick={this.deleteAccount.bind(this)}>
                      Delete
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </section>
        );
      });
    }
  }
  render() {
    return <ul id="account-list">{this.displayAccounts()}</ul>;
  }
}

// exports =====================================>

export default graphql(getAccountsQuery)(AccountList);
