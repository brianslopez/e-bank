// imports =====================================>

import React, { Component } from "react";
import { graphql } from "react-apollo";
import compose from "lodash.flowright";
import {
  getAccountsQuery,
  updateAccountMutation,
  deleteAccountMutation,
} from "./queries";
import { Link } from "react-router-dom";

// application =================================>

class AccountList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      balance: 0,
    };
  }

  updateAccount(e) {
    e.preventDefault();
    console.log(this);
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
    console.log(this);
    this.props.deleteAccountMutation({
      variables: {
        id: this.state.id,
      },
      refetchQueries: [{ query: getAccountsQuery }],
    });
  }

  displayAccounts() {
    var data = this.props.getAccountsQuery;
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
                    <input
                      onChange={(e) =>
                        this.setState({ balance: e.target.value })
                      }
                      placeholder={account.balance}
                    ></input>
                    <button onClick={this.updateAccount}>
                      Update
                    </button>
                    <button onClick={this.deleteAccount}>
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

export default compose(
  graphql(getAccountsQuery, { name: "getAccountsQuery" }),
  graphql(updateAccountMutation, { name: "updateAccountMutation" }),
  graphql(deleteAccountMutation, { name: "deleteAccountMutation" })
)(AccountList);
