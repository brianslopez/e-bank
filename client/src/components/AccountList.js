// imports ================================>

import React, { Component } from "react";
import { graphql } from "react-apollo";
import { getAccountsQuery } from "./queries";

// application =========================================>

class AccountList extends Component {
  displayAccounts() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Accounts...</div>;
    } else {
      return data.accounts.map((account) => {
        return (
          <div key={account.id}>
            "Account Name: "{account.name}" Balance: "{account.balance}
          </div>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <ul id="account-list">{this.displayAccounts()}</ul>
      </div>
    );
  }
}

// exports =====================================>

export default graphql(getAccountsQuery)(AccountList);
