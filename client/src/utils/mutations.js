import gql from 'graphql-tag';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstname: String!, $lastname: String!, $username: String!, $email: String!, $password: String!) {
    addUser(firstname: $firstname, lastname: $lastname, username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ACCOUNT = gql`
    mutation addAccount ($name: String!, $balance:Float!){
        addAccount(name: $name, balance: $balance) {
        _id
        }
    }
`;

export const ADD_TRANSACTION = gql`
mutation addTransaction ($accountID: ID!, $name: String!, $oldbalance: Float!, $newbalance: Float!){
    addTransaction(accountID:$accountID, name:$name, oldbalance: $oldbalance, newbalance: $newbalance) {
      _id
    }
  }
`;

export const EDIT_TRANSACTION = gql`
mutation editTransaction ($transactionID: ID!, $name: String!, $oldbalance: Float!, $newbalance: Float!){
	editTransaction(transactionID:$transactionID, name:$name, oldbalance: $oldbalance, newbalance: $newbalance) {
    _id
  }
}
`;

export const EDIT_ACCOUNT = gql`
mutation editAccount ($accountID: ID!, $name: String!, $balance: Float!){
	editAccount(accountID:$accountID, name:$name, balance: $balance) {
    _id
  }
}
`;

export const DELETE_ACCOUNT = gql`
mutation deleteAccount ($accountID: ID!){
	deleteAccount(accountID:$accountID) {
    _id
  }
}
`;

export const DELETE_TRANSACTION = gql`
mutation deleteTransaction ($accountID:ID!, $transactionID: ID!){
	deleteTransaction(accountID:$accountID, transactionID:$transactionID) {
    _id
  }
}
`;