// imports ================================>

import React, { Component } from "react";
import { gql } from "apollo-boost";
import { graphql } from "react-apollo";

// application =========================================>

const getAccountsQuery = gql`
  {
    accounts {
      name
      balance
      id
      customer {
        first_name
        last_name
      }
    }
  }
`;

class AccountList extends Component {
  displayAccounts() {
    var data = this.props.data;
    if (data.loading) {
      return <div>Loading Accounts...</div>;
    } else {
      return data.accounts.map((account) => {
        return (
          <div>
            {account.customer.first_name}
            {account.customer.last_name}
            {account.name}
            {account.balance}
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
