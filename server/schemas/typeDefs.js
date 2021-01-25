const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String
    lastname: String
    username: String
    email: String
    accounts: [Account]
  }

  type Account {
    _id: ID
    name: String
    balance: Float
    transactions: [Transaction]
  }

  type Transaction {
    _id: ID
    name: String
    oldbalance: Float
    newbalance: Float
  }

  type Query {
    me: User
    getAccount(accountID: ID!): Account
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstname: String!, lastname: String!, username: String!, email: String!, password: String!): Auth

    addAccount(name: String!, balance: Float!): Account
    addTransaction(accountID: ID!, name: String!, oldbalance: Float!, newbalance: Float!): Transaction

    deleteAccount(accountID: ID!): User
    deleteTransaction(accountID: ID!, transactionID: ID!): Account

    editAccount(accountID: ID!, name: String!, balance: Float!): Account
    editTransaction(transactionID: ID!, name: String!, oldbalance: Float!, newbalance: Float!): Transaction
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;