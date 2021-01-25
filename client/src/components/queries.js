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

const updateAccountMutation = gql`
  mutation($id: ID!, $balance: Int) {
    updateAccount(id: $id, balance: $balance) {
      id
      balance
    }
  }
`;

const deleteAccountMutation = gql`
  mutation($id: ID!) {
    deleteAccount(id: $id) {
      id
    }
  }
`;

// exports =====================================>

export {
  getAccountsQuery,
  addAccountMutation,
  updateAccountMutation,
  deleteAccountMutation,
};
