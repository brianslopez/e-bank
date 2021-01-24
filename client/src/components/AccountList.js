// imports ================================>

import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAccountsQuery } from "./queries";
import { Link } from "react-router-dom";

// application =========================================>

class AccountList extends Component {
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
                <div>
                  <h4>{account.name}</h4>
                  <h4>Balance: {account.balance}</h4>
                </div>
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
