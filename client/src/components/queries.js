// imports =====================================>

import { gql } from "apollo-boost";

// queries =====================================>

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

const addAccountMutation = gql`
  mutation($name: String!, $balance: Int!, $customer_id: ID!) {
    addAccount(name: $name, balance: $balance, customer_id: $customer_id) {
      id
      name
      balance
    }
  }
`;

// exports =====================================>

export { getAccountsQuery, addAccountMutation };
